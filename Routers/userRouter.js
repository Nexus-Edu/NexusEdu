const express = require("express");
const router = express.Router();

// Controller Imports
const { displayUserInfo, updateInfo, getAllUserAccounts } = require('../Controllers/userController')

// user
// A Route used to get all user account information
// Delete route when project is done
router.get('/', getAllUserAccounts)


// user/:id
router.get('/:id', displayUserInfo)
// user/:id/update
router.put('/:id/update', updateInfo)

module.exports = router;