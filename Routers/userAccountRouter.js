const express = require("express");
const router = express.Router();
const pool = require('../Database-Config/db');

// Controller Imports
const { login, signUp } = require("../Controllers/userAccountController")

// /login
router.get('/login/hello', (req,res)=> {
    res.status(200).json({"message":"This is my login api"})
})


//this could be user 
router.get("/login/:id", async (req,res) => {
    //this is how we get that person 
    const id = req.params.id
    try {
        const response = await pool.query("SELECT * from users where id = $1;", [id]);
        // must add validator later -> 
        res.status(200).json({data: response.rows})
    } catch (err){
        res.status(500).json({ message: `${err.message}` })
    }
})

router.put('/update/:id', async (req,res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const customer = await (await pool.query("SELECT * from customers where id = $1;", [id])).rows[0];


        const newCustomerData = Object.assign(customer, body);

        const response = await pool.query(`UPDATE customers
        SET first_name = $1, last_name = $2, address = $3, email = $4, password = $5
        WHERE id = $6  returning *;`, [newCustomerData.first_name, newCustomerData.last_name, newCustomerData.address, newCustomerData.email, newCustomerData.password, id]);

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