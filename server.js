//use command "npm run dev" to get output, for verifying check script of package.json

const express = require('express');
const mongoose = require('mongoose');
const DBschema = require('./model')
const cors = require('cors');

const app = express()


mongoose.connect('mongodb+srv://tharunkarnekota:tharunkarnekota@cluster0.scuaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(
    ()=>console.log('Db connected..')
)

app.use(express.json());
app.use(cors({
    origin : '*'
}))

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

app.delete('/delete/:id',async(req,res) => {
    try{
        await DBschema.findByIdAndDelete(req.params.id)
        return res.json(await DBschema.find())
    }
    catch(err){
        console.log(err)
    }
})

app.listen(5000,()=>{console.log("server is running..")})