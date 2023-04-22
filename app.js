const express = require('express');
const fs = require('fs');

// express app
const app = express();


app.get('/',(req,res)=>{
    console.log(req.url);
    res.sendFile('./views/index.html',{root : __dirname});
})

app.get('/about',(req,res)=>{
    console.log(req.url);
    res.sendFile('./views/about.html',{root : __dirname});
})

// listen to requests
app.listen(3000,()=>{
    console.log('server running on the port 3000');
})