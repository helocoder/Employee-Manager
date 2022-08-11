require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const userRouter = require('./router')
let router = express.Router()
const User = require('./models/UserModel')
//middleware
app.use(express.json());
//Routes//
app.post('/',async (req,res)=>{
    // let data = await dbConnect();
    try{
        await User.create(req.body)
        res.send("Data inserted")

    }catch(err){
        console.log(err)
    }
    
})

//Fetching data//
 
app.get('/users',async (req,res)=>{
    try {
        const data = await User.find()
        res.send(data)
    } catch (error) {
        console.log(err)
    }
})

//Starting Port
async function connDb(){
    await mongoose.connect(process.env.MONGO_URI)
}
// console.log(process.env.MONGO_URI)
connDb()

app.listen(process.env.PORT,()=>{
    console.log(`connected to db and running on port ${process.env.PORT}`);
})
