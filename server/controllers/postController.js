const { Request, Response, NextFunction } = require('express');
const PostModel = require('../models/postModel');
const { responseCreator, errorCreator } = require('../utils/responseCreator');

const createPost = async (req, res, next) => {
    try {
        const postData = req.body;
        // getting this data from logged in session via Auth middleware
        const { _id, name, profilePicture } = res.locals.user;

        postData.owner = { _id, name, profilePicture }

        const data = await PostModel.createPost(postData);
        res.status(201);
        res.send(responseCreator('Post created successfully', data));
    } catch (error) {
        next(error)
    }
};

const getPosts = async (req, res, next) => {
    try {
        // getting this data from logged in session via Auth middleware
        const { _id, friendList } = res.locals.user;
        const data = await PostModel.getPosts(_id, friendList);
        res.send(responseCreator('Posts fetched', data))
    } catch (error) {
        next(error)
    }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */

const like = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await PostModel.like(id);
        if (data) {
            res.send(responseCreator(data.isLiked ? 'Post Liked' : 'Post Disliked', data))
        }
    } catch (error) {
        next(error)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
const deletePost = async (req, res, next) => {
    try {
        const { id: postId } = req.params;
        const { _id } = res.locals.user;
        const post = await PostModel.getUserPosts(_id, postId);
        // console.clear();
        // console.log({ post }, _id.toString());
        // console.log(post.owner._id === _id.toString());

        if (post.owner._id === _id.toString()) {
            const data = await PostModel.deletePost(postId);
            if (data) {
                res.send(responseCreator('Post deleted successfully!!!',data) );
            }
        } else {
            errorCreator('You can only delete your own posts', 403)
        }

    } catch (error) {
        next(error)
    }
}


module.exports = { createPost, getPosts, like, deletePost }
