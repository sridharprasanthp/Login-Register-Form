const express=require('express');
const app=express();
const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/user";
const cors=require('cors');
const bodyParser=require('body-parser');


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect(url,((err)=>{
    if(err){
        console.log(err);console.log('error')
    }
    else{
        console.log('Database Connected');
    }
}));

const router=require('./Route');
app.use('/',router)

app.listen(3001,()=>{
    console.log('Server Listening in port 3001')
});