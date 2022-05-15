const pool = require('../Database-Config/db');
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
    const { message, hashtag } = req.body; 

    if(!message || !hashtag) {
        return res.status(404).send({ message: "Please enter a message or hashtag" });
    }

    try {
        const createPost = await DiscussionBoard.addPost(message, hashtag);
        res.status(201).json(createPost);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

// Updates parts or the entire post
// PUT
async function updatePost(req, res) {
    const id = req.params.id;
    const { message, hashtag } = req.body; 

    const findPost = await pool.query('SELECT * FROM posts WHERE post_id = $1', [id]);

    if (findPost.rows.length === 0) {
        return res.status(404).json({ message: 'Post not found' })
    }

    try {
        const updatePost = await DiscussionBoard.updatePost(id, message, hashtag);

        res.status(200).json(updatePost)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

// Deletes the post
// DELETE
async function deletePost(req, res) {
    const id = req.params.id;

    if (!id) {
        return res.status(404).json({ message: 'Goal not found' })
    }

    try {
        await DiscussionBoard.deletePost(id);

        const allPost = await DiscussionBoard.displayAllPost();
        res.status(200).json(allPost);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

module.exports = {
    displayAllPost,
    addPost,
    updatePost,
    deletePost,
}