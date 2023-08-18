const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

//connect to the database
const dbURI = 'mongodb+srv://zhyposadas:zhyzhyzhy123@node-1.yfv9gqg.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) =>  app.listen(3000))
    .catch((err)=>{console.log(err)});

// //Lagyan ng laman yung columns, save, then record sa database
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'Zhyiee New Blog',
//         snippet: 'About my New Blog',
//         body: 'More about my new Blog'
//     });

//     blog.save()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })  
// });


// //Itong next get handler will find all documents na recorded sa database
// app.get('/all-blog', (req, res) => {
//     Blog.find()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// });


// //Itong next get handler, hahanapin niya yung document by id
// app.get('/single-blog', (req, res) => {
//     Blog.findById('64ce39f85ce4e35c4cecf90a') //Yung string na nakalagay is id na unique sa kada document na nakasave sa database
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })  
// });

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
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    // const achievements = [
    //     {title: 'Elementary School', des: 'With Honors'},
    //     {title: 'High School', des: 'With High Honors'},
    //     {title: 'College', des: 'With Highest Honors'}
    // ];
    // res.render('homepage', { title: 'Home', achievements} );
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.use(blogRoutes);

app.use((req, res)=>{
    res.status(404).render('404', { title: '404'});
});





// app.get('/blogs', (req, res) => {
//     Blog.find().sort({ createdAt: -1 }) //yung sort ginamit para masort siya ascending or descending. But dito ang ginawa -1, kaya descending yung pagkaka output sa UI, or yung new documents yung mauuna sa taas palagi
//         .then((result)=>{
//             res.render('homepage', { title: 'All Blogs', blogs: result}); //sa blogs na property nakalagay lahat ng documents na meron sa collection
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// });


// //Sa console lalabas yung iniput ni user sa form. To use the req.body para ma fetch yung laman ng ininput ni user, kailangang mag-create ng panibagong middle which is use method and gamitin yung urlencoded() method na meron si express
// // app.post('/blogs', (req, res) => {
// //     console.log(req.body); 
// // })

// app.post('/blogs', (req, res) => {
//     const blog = new Blog(req.body); 

//     blog.save()
//         .then((result)=>{
//             res.redirect('/blogs');
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })

// app.get('/blogs/:id', (req, res) => {
//     const id = req.params.id;

//     // console.log(id);
//     Blog.findById(id)
//         .then((result)=>{
//             res.render('details', { blogs: result, title: 'Blogs Details'});
//         })
//         .catch((err)=>{
//             console.log(err);
//         })  
// })

// app.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;

//     Blog.findByIdAndDelete(id)
//         .then((result)=>{
//             res.json({ redirect: '/blogs'});
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })

