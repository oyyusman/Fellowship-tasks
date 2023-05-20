const express=require('express');
const dotenv=require('dotenv').config()
const connectdb=require('./config/db')
const  colors=require('colors');
const {errorHanlder}=require('./middleware/error')
const port=5000
connectdb()

const app =express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./Routes/getRoutes'))
app.use('/api/users',require('./Routes/userRoutes'))

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})