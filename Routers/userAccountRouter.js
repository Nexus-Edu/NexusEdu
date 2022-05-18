const express = require("express");
const router = express.Router();
const pool = require('../Database-Config/db');

// Controller Imports
const { login, signUp } = require("../Controllers/userAccountController");
// const { password } = require("pg/lib/defaults");

// /login
router.get('/login/hello', (req,res)=> {
    res.status(200).json({"message":"This is my login api"})
})


//this could be user // this is how we login -> 
router.get("/login", async (req,res) => {

    const {email, password} = req.body;

    //this is how we get that person 
    // const id = req.params.id
/// email will need for log in  

    try {
        const response = await pool.query("SELECT * from users where email = $1;", [email]);
        // must add validator later -> 
        console.log(response.rows)
        if (response.rows.length === 0){
          res.status(404).json({message: "user not found, is that the correct email? "})
          return
        }

        /// here is where validation will be inputed 
        res.status(200).json({data: response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}` })
    }
})

router.put('/update/:id', async (req,res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const user = await (await pool.query("SELECT * from customers where id = $1;", [id])).rows[0];


        const updatedUserData = Object.assign(user, body);

        const response = await pool.query('UPDATE users SET email = $2, first_name = $3, last_name = $4, age = $5, birthday = $6, image = $7, bio = $8, password = $9 WHERE id = $1', [id, email, first_name, last_name, age, birthday, image, bio, password])

        res.status(201).json({ customerUpdata: response.rows });
    } catch (err){
        res.status(500).json({ message: `${err.message}`});
    }
})




// /signup
router.get('/signup', (req,res)=> {
    res.status(200).json({"message":"This is my login api"})
})

module.exports = router;