const express = require('express');
const fs = require('fs');

// express app
const app = express();

//register view engine
app.set('view engine','ejs');
// app.set('views','myviews'); ->to set a diff views folder other than the default 'views'

app.get('/',(req,res)=>{
    const blogs = [
        {title:'yoshi finds eggs' , snippet:'hello ji'},
        {title: 'Mario finds stars',snippet:'stars mille mujhe'},
        {title: 'How to defeat browser',snippet:'the net ninja crash course karo'}
    ];

    res.render('index',{title : 'Home',blogs});
})

app.get('/about',(req,res)=>{
    console.log(req.url);
    res.render('about',{title : 'About'});
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title : 'Create a new Blog'});
})


//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title : '404'});
})

// listen to requests
app.listen(3000,()=>{
    console.log('server running on the port 3000');
})