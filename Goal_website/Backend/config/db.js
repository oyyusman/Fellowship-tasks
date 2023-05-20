const mongoose=require('mongoose');
const connectDb=async()=>{
    try{
        const conn=await mongoose.connect("mongodb://0.0.0.0:27017/Goals");
        console.log(`mongodb connected: ${conn.connection.host}`.cyan.underline)
   
}
catch(error){
    console.log(error)
    process.exit(1)
}

}
module.exports=connectDb;