const DiscussionBoard = require("../Models/dicussionBoardModel");


//will display board for users
 async function displayBoard(req, res) {
    try {
        const allPost = await DiscussionBoard.displayAllPost();
        res.status(200).json(allPost);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

//will add posts to the board
const addPost = (req, res) => {

}

//will update the post
const updatePost = (req, res) => {

}

//will delete the post
const deletePost = (req, res) => {

}

module.exports = {
    displayBoard,
    addPost,
    updatePost,
    deletePost,
}