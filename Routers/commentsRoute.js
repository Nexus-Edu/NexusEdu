const express = require("express");
const router = express.Router();
const pool = require('../Database-Config/db');


router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const databaseResult = await pool.query(`SELECT comments.comment , comments.created_at, comments.id, users.username, users.first_name
        from comments 
        join users 
        on comments.user_id = users.id
        where comments.post_id = $1
        ORDER BY posts.id DESC`,[id]);
        return res.status(200).json({ data: databaseResult.rows })
    }
    catch {
        res.status(500).json({ message: `${err.message}` })
    }
}) 

router.post('/makeComment', async (req, res) => {
    const data = req.body;
    try {
        const response = await pool.query(`INSERT INTO comments (post_id, user_id, comment) values ($1, $2, $3) returning *;`, [data.post_id, data.user_id, data.comment]) 

        res.status(201).json({ data: response.rows });
    } catch (err) {
        res.status(500).json({ message: `${err.message}` });
    }
}) 
// -> there was a change here need to save and then update the delete 

router.delete('/delete/:id', async (req, res)=>{
    const id = req.params.id
    try{
        const sql = `DELETE from comments
        where id = $1`

        await pool.query(sql,[id])

        res.status(204).json({message: `comment was deleated`})
    } catch(err){
        res.status(500).json({ message: `${err.message}`})
    }
})

module.exports = router;