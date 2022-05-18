const express = require("express");
const router = express.Router();
const pool = require('../Database-Config/db');

// Controller Imports
// const { login, signUp } = require("../Controllers/userAccountController");
// const { password } = require("pg/lib/defaults");


router.get('/users', async (req,res) => {
    try{
    const databaseResult = await pool.query('SELECT * FROM users');
    return res.status(200).json({data: databaseResult.rows})
    }
    catch{
        res.status(500).json({ message: `${err.message}` })
    }
}) 


// /login
router.get('/login/hello', (req,res)=> {
    res.status(200).json({"message":"This is my login api"})
})


//this could be user // this is how we login -> 
router.get("/login", async (req,res) => {

    const {username, password} = req.body;

    //this is how we get that person 
    // const id = req.params.id
/// email will need for log in  

    try {
        const response = await pool.query("SELECT * from users where username = $1;", [username]);
        // must add validator later -> 
        console.log(response.rows)
        if (response.rows.length === 0){
          res.status(404).json({message: "user not found, is that the correct username? "})
          return
        }

        /// here is where validation will be inputed 
        res.status(200).json({data: response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}` })
    }
})


router.put('/updateUserInfo/:id', async (req,res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const user = await (await pool.query("SELECT * from users where id = $1;", [id])).rows[0];


        const updatedUserData = Object.assign(user, body);

        const response = await pool.query('UPDATE users SET email = $2, first_name = $3, last_name = $4, age = $5, birthday = $6, image = $7, bio = $8, password = $9, username = $10 WHERE id = $1', [id, updatedUserData.email, updatedUserData.first_name, updatedUserData.last_name, updatedUserData.age, updatedUserData.birthday, updatedUserData.image, updatedUserData.bio, updatedUserData.password, updatedUserData.username])

        res.status(201).json({ response: response.rows });
    } catch (err){
        res.status(500).json({ message: `${err.message}`});
    }
})




// /signup
router.post('/signup', async (req,res)=> {
    const data = req.body;
    try {
        const response = await pool.query(`INSERT INTO users (username, password, first_name, last_name, age, email, birthday, image, bio) values ($1, $2, $3, $4, $5, $6,$7, $8, $9) returning *;`, [data.username, data.password, data.first_name, data.last_name ,data.age, data.email, data.birthday, data.image, data.bio]) 

        res.status(201).json({ data: response.rows });
    } catch (err) {
        res.status(500).json({ message: `${err.message}` });
    }
})

router.delete("/user/:id", async(req,res) => {
    const { id } = req.params
    console.log(id)
    try{
        const sql = `DELETE from users
        where id = $1`

        await pool.query(sql,[id])

        res.status(204).json({message: `user was deleated`})
    } catch(err){
        res.status(500).json({ message: `${err.message}`})
    }
})

module.exports = router;