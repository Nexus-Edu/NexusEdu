const DiscussionBoard = require("../Models/dicussionBoardModel");

// Displays all the posts on the discussion board
// GET
async function displayAllPost(req, res) {
    try {
        const allPost = await DiscussionBoard.displayAllPost();
        res.status(200).json(allPost);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

// Creates a post along the board
// POST
async function addPost(req, res) {

}

// Updates parts or the entire post
// PUT
async function updatePost(req, res) {

}

// Deletes the post
// DELETE
async function deletePost(req, res) {

}

module.exports = {
    displayAllPost,
    addPost,
    updatePost,
    deletePost,
}