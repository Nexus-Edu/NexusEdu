const express = require("express");
const router = express.Router()

// Controller Imports 
const { displayAllPost, getSpecificUserPosts, addPost, updatePost, deletePost } = require("../Controllers/discussionBoardController")

// /board
router.get('/', displayAllPost)
// /board/:user_id
router.get('/:user_id', getSpecificUserPosts)
// board/post
router.post('/post/', addPost) /// this can be cleaned up 
// board/post/:id
router.put('/post/:id', updatePost) // leo -> this route is not needed. 
// board/post/:id
router.delete('/post/:id', deletePost)

module.exports = router;