const express = require("express");
const router = express.Router();

// Controller Imports
const { displayUserInfo, updateInfo } = require('../Controllers/userController')

// user/:id
router.get('/:id', displayUserInfo)
// user/:id/update
router.put('/:id/update', updateInfo)

module.exports = router;