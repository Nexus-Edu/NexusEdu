const express = require("express");
const router = express.Router()

// Controller Imports 
const { displayAllPost, addPost, updatePost, deletePost } = require("../Controllers/discussionBoardController")

// /board
router.get('/', displayAllPost)
// board/post
router.post('/post', addPost) /// this can be cleaned up 
// board/post/:id
router.put('/post/:id', updatePost)
// board/post/:id
router.delete('/post', deletePost)

module.exports = router;