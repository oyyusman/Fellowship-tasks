const  asyncHandler=require('express-async-handler')
const User=require('../Models/userModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const registerUser =asyncHandler(  async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error('please add all filed')
    }
    // check if user exist
    const user=await User.findOne({email});
    if(user){
        res.status(400);
        throw new Error('User already exist')
        
    }
    // hasing password by bcrypt
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    // create user
    const users=await User.create({
        name,
        email,
        password:hashedPassword
    })
    if(users){
        res.status(200).json({
            _id:users.id,
            name:users.name,
            email:users.email,
            token:generateToken(users._id)
        })
    }
    else{
        res.status(400);
        throw new Error('invalid user data')
        
    }
    
})
const loginUser =asyncHandler(  async(req,res)=>{
    const{email,password}=req.body
    // check for user email
    const user=await User.findOne({email})
    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error('invalid credentials')

    }
})
const getMe =asyncHandler( async(req,res)=>{
    const {_id,name,email}=await User.findById(req.user.id)
    res.status(200).json({
        id:_id,
        name,
        email
    })
})

// functon to generate gwt
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'400d'
    } )
}

module.exports={
    registerUser,
    loginUser,
    getMe
}