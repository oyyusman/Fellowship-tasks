const jwt=require('jsonwebtoken');
const asyncHandler=require('express-async-handler');
const User=require('../Models/userModel');
const protect=asyncHandler( async(req,res,next,err)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            // getting token for bearer
            token=req.headers.authorization.split(' ')[1]
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            // get user from token
            req.user=  await User.findById(decoded.id).select('-password')
            next()

        }
        catch(error){
            console.log(error)
            res.status(401)
            throw new Error('not authorized')

        }
    }
    if(!token){
        res.status(401)
        throw new Error('not authorized not toeken')
    }
})
module.exports={
    protect
}