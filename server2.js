//it is just for reference, main file is server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express()

mongoose.connect('mongodb+srv://tharunkarnekota:tharunkarnekota@cluster0.scuaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(
    ()=>console.log('Db connected..')
)

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(5000,()=>{console.log("server is running..")})