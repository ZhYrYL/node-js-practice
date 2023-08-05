const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

const dbURI = 'mongodb+srv://zhyposadas:zhyzhyzhy123@node-1.yfv9gqg.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) =>  app.listen(3000))
    .catch((err)=>{console.log(err)});

//Lagyan ng laman yung columns, save, then record sa database
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'Zhyiee New Blog',
        snippet: 'About my New Blog',
        body: 'More about my new Blog'
    });

    blog.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })  
});


//Itong next get handler will find all documents na recorded sa database
app.get('/all-blog', (req, res) => {
    Blog.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })
});


//Itong next get handler, hahanapin niya yung document by id
app.get('/single-blog', (req, res) => {
    Blog.findById('64ce39f85ce4e35c4cecf90a') //Yung string na nakalagay is id na unique sa kada document na nakasave sa database
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })  
});

//Response_1: Sending HTML tags as response using Express
// app.get('/', (req, res) => {
//     res.send('Hello');
// });

// // Response_2: Sending HTML file as response using Express
// app.get('/', (req, res) => {
//     res.sendFile('./html/homepage.html', { root: __dirname });
// });



// app.get('/about', (req, res) => {
//     res.sendFile('./html/about.html', { root: __dirname });

// });


// app.get('/about-me', (req, res)=>{
//     res.redirect('/about');
// });

// app.use((req, res) => {
//     res.status(404).sendFile('./html/404.html', { root: __dirname });
// });


//Response_3: Sending ejs file as response
app.set('view engine', 'ejs'); //Registering EJS

// app.use((req, res, next)=>{
//     console.log('Request Made:');
//     console.log('Host: ', req.hostname);
//     console.log('Path: ', req.path);
//     console.log('Method: ', req.method, '\n');
//     next();
// });

app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    const achievements = [
        {title: 'Elementary School', des: 'With Honors'},
        {title: 'High School', des: 'With High Honors'},
        {title: 'College', des: 'With Highest Honors'}
    ];
    res.render('homepage', { title: 'Home', achievements} );
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});
app.get('/create-blog', (req, res)=>{
    res.render('create', { title: 'Create Blog'});
});

app.use((req, res)=>{
    res.status(404).render('404', { title: '404'});
});