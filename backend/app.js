const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
const app=express();
dotenv.config({path:'./config.env'});
//Middleware


const PORT=process.env.PORT
require('./db/conn');
app.use(express.json());


app.use(require('./router/auth')); //in this file we will have all the routes and we are using middleware for them.


app.listen(PORT,()=>{
    console.log(`running on ${PORT}`);
})