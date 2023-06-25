const { Request, Response, NextFunction } = require('express')
const UserModel = require('../models/userModel');
const { generateToken, verifyToken } = require('../utils/jwtUtils');
const { generatePasswordHash, verifyPassword } = require('../utils/passwordUtils');
const { responseCreator, errorCreator } = require('../utils/responseCreator');

const signup = async (req, res, next) => {
    try {
        const { password, ...data } = req.body;
        const pwdHash = await generatePasswordHash(password);
        data.password = pwdHash
        const userData = await UserModel.createUser(data);
        res.status(201);
        res.send(responseCreator('Account created successfully', userData));
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
        const { password: pwdHash, ...user } = await UserModel.findUser(username);

        // password validation
        const isPasswordValid = verifyPassword(password, pwdHash);
        if (isPasswordValid) {
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
        const { password, ...user } = await UserModel.findUser(username);
        res.send(responseCreator(`${username} logged in successfully with cookie!!!!`, user))
    } catch (error) {
        next(error)
    }
}

module.exports = { signup, login, loginWithCookie }
