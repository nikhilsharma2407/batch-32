const mongoose = require('mongoose');
const { errorCreator } = require('../utils/responseCreator');
const { Schema, model } = mongoose;


const postSchema = new Schema({
    image: String,
    likes: Number,
    text: String,
    date: Date,
    isLiked: Boolean,
    owner: {
        _id: String,
        name: String,
        profilePicture: String,
    },
});

// CRUD operation on user

postSchema.statics.createPost = async (postData) => {
    postData.date = new Date();
    const data = await PostModel.create(postData);
    return data;
}

postSchema.statics.getPosts = async (userId, friendList) => {
    const query = [friendList].map(id => {
        return { "owner._id": id }
    });
    const data = await PostModel.find({
        $or: query
    });
    const userPosts = await PostModel.find({"owner._id":userId});
    return [...userPosts,...data];
}

postSchema.statics.getUserPosts = async (userId, postId) => {
    if(postId){
        return PostModel.findById(postId);
    }
    return PostModel.find({
        "owner._id": userId
    }, { __v: 0 });
}

postSchema.statics.deletePost = async (id) => {
    return PostModel.findByIdAndDelete(id);
}

postSchema.statics.like = async (id) => {
    const { isLiked } = (await PostModel.findById(id)).toObject();
    const count = isLiked ? -1 : 1;

    const data = await PostModel.findByIdAndUpdate(id, {
        $inc: { likes: count },
        $set: { isLiked: !isLiked }
    },
        { new: true }
    );
    return data
}

const PostModel = model('posts', postSchema);


module.exports = PostModel;
