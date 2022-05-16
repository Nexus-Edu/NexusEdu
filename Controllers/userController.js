const pool = require('../Database-Config/db');
const User = require("../Models/userModel")

async function getAllUserAccounts(req, res) {
    const result = await User.getAllUserAccounts(); 
    res.status(200).json(result)
}

// Gets all user account information
// GET request
async function displayUserInfo(req, res) {
    const id = req.params.id;

    try {
        const displayUser = await User.displayUserInfo(id);
        
        if (displayUser.length === 0) {
            return res.status(404).json({ message: `User ${id} does not exist` });
        }

        res.status(200).json(displayUser);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

// Edit updates all or specific parts of a user's account
// PUT request
async function updateInfo(req, res) {
const id = req.params.id;
const { email, first_name, last_name, age, birthday, image, bio } = req.body;

try {
    const updateUserInfo = await User.updateInfo(id, email, first_name, last_name, age, birthday, image, bio);

    res.status(200).json(updateUserInfo)
} catch (err) {
    res.status(500).send({ message: err.message })
}
}

module.exports = {
    displayUserInfo,
    updateInfo,
    getAllUserAccounts
}