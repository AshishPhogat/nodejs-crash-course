const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
// express app
const app = express();

//CONNECT TO MONGODB
const dbURI = "mongodb+srv://ashishphogug20:788zipvkn3Wttk1A@cluster0.qll3ru3.mongodb.net/blogs?retryWrites=true&w=majority"
mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology: true}).then((result)=>{console.log("database connection successful")
   app.listen(3000,()=>{
    console.log('server running on the port 3000');
})
}).catch((err)=>{console.log(err)});

//register view engine
app.set('view engine','ejs');
// app.set('views','myviews'); ->to set a diff views folder other than the default 'views'

//middleware & static file
app.use(morgan('dev'));

app.use(express.static('public'));

//routes
app.get('/',(req,res)=>{
    const blogs = [
        {title:'yoshi finds eggs' , snippet:'hello ji'},
        {title: 'Mario finds stars',snippet:'stars mille mujhe'},
        {title: 'How to defeat browser',snippet:'the net ninja crash course karo'}
    ];

    res.render('index',{title : 'Home',blogs});
})

app.get('/about',(req,res)=>{
    res.render('about',{title : 'About'});
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title : 'Create a new Blog'});
})

//mongodb and mongoose sandbox api
app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title : 'new blog',
        snippet: 'about my new blog',
        body : 'more about my new blog'
    });

    blog.save().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })

});

//get all blogs
app.get('/all-blogs',(req,res)=>{
    Blog.find().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })

});

//single blog by id
app.get('/single-blog/:id',(req,res)=>{
    Blog.findById(req.params.id).then((result)=>{
        res.send({result});
    }).catch((err)=>{
        console.log(err);
    });
})


//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title : '404'});
})

// listen to requests
