//it is just for reference, main file is server.js

const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World !!!!!!!!!')
})

app.listen(5000,()=>{console.log("server is running..")})