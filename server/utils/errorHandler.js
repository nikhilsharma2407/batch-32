const errorHandler = (err,req,res,next)=>{
    console.error(err)
    if(err.code ===11000){
        err.message = 'username already exists!!!'
        err.status = 403
    }
    else if(err.name ==='TokenExpiredError'){
        err.message = 'Session expired. Please login again to continue!!!'
        err.status = 401
    }
    res.status(err.status||500);
    res.send({success:false, message:err.message})
};


module.exports = errorHandler;