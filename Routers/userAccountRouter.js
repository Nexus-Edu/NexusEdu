const express = require("express");
const router = express.Router();

const { login, signUp } = require("../Controllers/userAccountController")

//user accounts
router.post('/login', login)
router.post('/signup', signUp)