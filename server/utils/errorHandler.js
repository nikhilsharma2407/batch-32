const errorHandler = (err,req,res,next)=>{
    console.error(err)
    res.status(err.status||500);
    res.send({success:false, message:err.message})
};


module.exports = errorHandler;