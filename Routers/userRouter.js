const express = require("express");
const router = express.Router();

const { displayUserInfo, updateInfo } = require('../Controllers/userController')

router.get('/:id', displayUserInfo)
router.put('/:id/update', updateInfo)

module.exports = router;