const express = require("express");
const router = express.Router();
const pool = require('../Database-Config/db');


// Controller Imports
const { displayUserInfo, updateInfo, getAllUserAccounts } = require('../Controllers/userController')

// user
// A Route used to get all user account information
// Delete route when project is done
router.get('/', getAllUserAccounts)


// user/:id
router.get('/:id', displayUserInfo)
// user/:id/update


router.put('/:id/update', async (req,res) => {
    console.log('hello world')
    const { id } = req.params;
    console.log(id)
    const body = req.body;
    // console.log(body)
    try {
        const user = await (await pool.query("SELECT * from users where id = $1;", [id])).rows[0];


        const updatedUserData = Object.assign(user, body);

        console.log(updatedUserData)

        const response = await pool.query('UPDATE users SET email = $2, first_name = $3, last_name = $4, age = $5, birthday = $6, image = $7, bio = $8, password = $9 WHERE id = $1', [id, updatedUserData.email, updatedUserData.first_name, updatedUserData.last_name, updatedUserData.age, updatedUserData.birthday, updatedUserData.image, updatedUserData.bio, updatedUserData.password])

        res.status(201).json({ response: response.rows });
    } catch (err){
        res.status(500).json({ message: `${err.message}`});
    }
})

module.exports = router;