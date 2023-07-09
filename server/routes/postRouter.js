const express = require("express");
const { createPost, getPosts, like, deletePost } = require("../controllers/postController");
const router = express.Router();

router.post('/create', createPost);
router.get('/getPosts', getPosts);
router.patch('/like/:id', like);
router.delete('/delete/:id', deletePost);

module.exports = router