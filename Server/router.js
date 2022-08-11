const express = require('express')
const User = require("./models/UserModel");


const app = express.Router();

app.get('/register', (req, res)=>{
    res.send('HCCC')
})


module.exports = app