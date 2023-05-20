const  asyncHandler=require('express-async-handler')
const Goal=require('../Models/goalModel');
const User=require('../Models/userModel');
const {protect}=require('../middleware/authmiddleware')
// desc get goals
const  getGoals=asyncHandler(  async (req,res)=>{
    const goals =await Goal.find({user:req.user.id})
    res.status(200).json(goals)
})
// desc get goals
const  setGoals=asyncHandler( async(req,res)=>{
    if(!req.body.text){
    res.status(400)
    throw new Errot(json({msg:"provide text"}))
    }
    const goal=await Goal.create({
        text:req.body.text,
        user:req.user.id
    })
    res.json(goal)
})
// desc get goals
const  updateGoals= asyncHandler( async (req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    const user=await User.findById(req.user.id)
    // check ofr user
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }
    // make sure only login user matches the goal user
    if(goal.user.toString()!== user.id){
        res.status(401)
        throw new Error('user not authorized')

    }
    const updateGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(updateGoal)
})
const  deleteGoals=asyncHandler( async (req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    const user=await User.findById(req.user.id)
    // check ofr user
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }
    // make sure only login user matches the goal user
    if(goal.user.toString()!== user.id){
        res.status(401)
        throw new Error('user not authorized')

    }
    await goal.deleteOne()
   
    res.json({id:req.params.id})

    
})

module.exports={
    getGoals,setGoals,updateGoals,deleteGoals
}