//it is just for reference, main file is server.js

const express = require('express');
const mongoose = require('mongoose');
const DBschema = require('./model')

const app = express()


mongoose.connect('mongodb+srv://tharunkarnekota:tharunkarnekota@cluster0.scuaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(
    ()=>console.log('Db connected..')
)

app.use(express.json());

app.post('/addtask',async(req,res)=>{
    const {todo} = req.body;
    try{
        const newData = new DBschema({
            todo : todo
        })
        await newData.save();
        return res.json(await DBschema.find() )
    }
    catch(err){
        console.log(err)
    }
})

app.get('/gettask',async(req,res)=>{
    try{
        return res.json(await DBschema.find())
    }
    catch(err){
        console.log(err)
    }
})

app.listen(5000,()=>{console.log("server is running..")})