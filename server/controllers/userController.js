const UserModel = require('../models/userModel');
const { responseCreator, errorCreator } = require('../utils/responseCreator');

const signup = async (req, res, next) => {
    try {
        const data = req.body;
        const userData = await UserModel.createUser(data);
        res.status(201);
        res.send(responseCreator('Account created successfully', userData));
    } catch (error) {
        next(error)
    }
};

const login = async (req,res,next)=>{
    try {
        const {username,password:pwd} =  req.body;
        const {password,...user} = await UserModel.findUser(username);
        
        // password validation
        if (password === pwd){
            res.send(responseCreator(`${username} logged in successfully!!!`,user))
        }else{
            // 401-> unauthorised
            errorCreator('Incorrect password!!!',401);
        }
        
    } catch (error) {
        next(error)        
    }
    
}


module.exports = { signup, login }