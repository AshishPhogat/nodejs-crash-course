const express = require('express');
const fs = require('fs');

// express app
const app = express();

//register view engine
app.set('view engine','ejs');
// app.set('views','myviews'); ->to set a diff views folder other than the default 'views'

app.get('/',(req,res)=>{
    console.log(req.url);
    res.sendFile('./views/index.html',{root : __dirname});
})

app.get('/about',(req,res)=>{
    console.log(req.url);
    res.sendFile('./views/about.html',{root : __dirname});
})


//redirects
app.get('/about-me',(req,res)=>{
    res.redirect("/about");
})

//404 page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root : __dirname})
})

// listen to requests
app.listen(3000,()=>{
    console.log('server running on the port 3000');
})