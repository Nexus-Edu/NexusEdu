const express = require("express");
const router = express.Router();


router.get('/', async (res, req)=>{
    res.status(200).send({ message:"hello"});
})


module.exports = router;