const express = require("express");
const router = express.Router();

// Controller Imports
const { login, signUp } = require("../Controllers/userAccountController")

// /login
router.post('/login', login)
// /signup
router.post('/signup', signUp)

module.exports = router;