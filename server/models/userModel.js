const mongoose = require('mongoose');
const { errorCreator } = require('../utils/responseCreator');
const { Schema, model } = mongoose;


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username is mandatory!!!']
    },
    password: {
        type: String,
        required: [true, 'password is mandatory!!!']
    },
    name: {
        type: String,
        required: [true, 'name is mandatory!!!']
    },
    profilePicture: {
        type: String,
    },
    secret: {
        type: String,
    },
    friendList: [String]

});

// CRUD operation on user

userSchema.statics.createUser = async (userData) => {
    const data = await UserModel.create(userData);
    console.log(data);
    return data;
}

userSchema.statics.findUser = async (username) => {
    const user = (await UserModel.findOne({ username }, { __v: 0 }))?.toObject();
    console.log(user);
    if (user) {
        return user;
    }
    else {
        errorCreator("username doesn't exist", 404);
    }

}

userSchema.statics.updateFriendList = async (username, id, addFriend = true) => {
    let data = null;
    if (addFriend) {
        data = await UserModel.updateOne({ username }, { $addToSet: { friendList: id } });
    } else {
        data = await UserModel.updateOne({ username }, { $pull: { friendList: id } });
    }
    if (data.modifiedCount) {
        return UserModel.findUser(username);
    }
}

const UserModel = model('users', userSchema);


module.exports = UserModel;