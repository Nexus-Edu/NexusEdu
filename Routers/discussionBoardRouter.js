const express = require("express");
const router = express.Router()

const { displayBoard, addPost, updatePost, deletePost } = require("../Controllers/discussionBoardController")

//discussion board
router.get('/', displayBoard)
router.post('/post', addPost)
router.put('/post/:id', updatePost)
router.delete('/post/:id', deletePost)

module.exports = router;