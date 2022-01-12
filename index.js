const express = require('express');
const app = express();
const dotenv = require ('dotenv');
const res = require('express/lib/response');
const req = require('express/lib/request');
dotenv.config();
const port= process.env.PORT ||800;

 app.get("/",(req,res)=>{
     res.send('selamat JALAN')
 })

 app.listen(port, ()=>{
    console.log(`Walked on 1945 By Mr.Adolf H.`);
})