const { sign, verify } = require('jsonwebtoken');
const { errorCreator } = require('./responseCreator');

const SECRET_KEY = 'MySecretKey';

const generateToken = (data,time='1h') => {
    return sign(data, SECRET_KEY, { expiresIn: time });
};

const verifyToken = (token) => {
    if (!token) {
        errorCreator('token missing!!!, Please login to continue', 401);
    }
    const data = verify(token, SECRET_KEY);
    console.log({ verifyToken: data });
    return data

};

module.exports = { verifyToken, generateToken }
