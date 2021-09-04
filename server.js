const express = require('express');
const bodyParser = require('body-parse');
const request = require('request');


const app = express();
app.get('/',function(req,res){
    res.sendFile(__dirname+"index.html")
})

app.get('/home',function(req,res){
    res.send(__dirname+"home.html")
})

app.listen(3000,function(){
    console.log("Server is running");
})