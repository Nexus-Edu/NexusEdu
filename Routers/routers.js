const express = require("express");
const router = express.Router()


router.get('/', baseline)

//user accounts
router.post('/login', login)
router.post('/signup', signUp)
//user 
router.get('/user/:id', displayUserInfo)
router.put('/user/:id/update', updateInfo)
//discussion board
router.get('/board', displayBoard)
router.post('/board/post', addPost)
router.put('/board/post/:id', updatePost)
router.delete('/board/post/:id', deletePost)
//programs
router.post('/program', showProgramInfo)
router.put('/program/:id', updateProgramInfo)
router.get('/program', displayProgramInfo)