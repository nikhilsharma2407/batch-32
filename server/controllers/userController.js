const { Request, Response, NextFunction } = require('express')
const UserModel = require('../models/userModel');
const { generateToken, verifyToken } = require('../utils/jwtUtils');
const { generatePasswordHash, verifyPassword } = require('../utils/passwordUtils');
const { responseCreator, errorCreator } = require('../utils/responseCreator');
const { generateQRcode, verifyOTP } = require('../utils/totpUtils');

const signup = async (req, res, next) => {
    try {
        const { password, ...data } = req.body;
        const pwdHash = await generatePasswordHash(password);
        data.password = pwdHash
        const { qrcode, secret } = await generateQRcode();
        data.secret = secret

        const userData = await UserModel.createUser(data);
        res.status(201);
        res.send(responseCreator('Account created successfully', qrcode));
        // res.send(`
        //     <h1>Two Factor authentication setup</h1>
        //     <h2>Please scan the QR code with Google Authenticator</h2>
        //     <img src=${qrcode}>
        // `)
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
const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { password: pwdHash, secret, ...user } = await UserModel.findUser(username);

        // password validation
        const isPasswordValid = await verifyPassword(password, pwdHash);
        console.log({ isPasswordValid });
        if (isPasswordValid === true) {
            // login successful
            const token = generateToken(user);
            res.cookie('token', token, { httpOnly: true, maxAge: 3600_000 })
            res.send(responseCreator(`${username} logged in successfully!!!`, user))
        } else {
            // 401-> unauthorised
            errorCreator('Incorrect password!!!', 401);
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
const loginWithCookie = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        const { username } = verifyToken(token);
        const { password, secret, ...user } = await UserModel.findUser(username);
        res.send(responseCreator(`${username} logged in successfully with cookie!!!!`, user))
    } catch (error) {
        next(error)
    }
}

const resetPassword = async (req, res, next) => {
    try {
        const { otp, username, password: pwd } = req.body;

        const user = await UserModel.findUser(username);
        const { secret } = user;

        const isOTPValid = verifyOTP(otp, secret);
        if (isOTPValid) {
            // reset the password
            const password = await generatePasswordHash(pwd);
            const userUpdated = await UserModel.updateOne({ username }, { $set: { password } });
            if (userUpdated.modifiedCount) {
                res.send(responseCreator('Password reset successfully!!!'))
            } else {
                errorCreator('New password cannot be same as old password', 403);
            }
        } else {
            errorCreator('Invalid OTP', 403);
        }
    } catch (error) {
        next(error)
    }
}

const addFriend = async (req, res, next) => {
    try {
        const { username } = res.locals.user;
        const { name, id } = req.body;
        const data = await UserModel.updateFriendList(username, id);
        if (data) {
            res.send(responseCreator(`You're now friend with ${name}`, data.friendList))
        }
    } catch (error) {
        next(error)
    }
}

const removeFriend = async (req, res, next) => {
    try {
        const { username } = res.locals.user;
        const { name, id } = req.body;
        const data = await UserModel.updateFriendList(username, id, false);
        if (data) {
            res.send(responseCreator(`You're no longer friend with ${name}`, data.friendList))
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
 const logout = async (req, res, next) => {
    try {
        res.clearCookie('token');
        res.send(responseCreator('User logged out successfully!!!'));
    } catch (error) {
        next(error)
    }
}

module.exports = { signup, login, loginWithCookie, resetPassword, addFriend, removeFriend, logout }
