const express = require('express');

const Blog = require('../models/blog');
const router = express.Router();

router.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 }) //yung sort ginamit para masort siya ascending or descending. But dito ang ginawa -1, kaya descending yung pagkaka output sa UI, or yung new documents yung mauuna sa taas palagi
        .then((result)=>{
            res.render('homepage', { title: 'All Blogs', blogs: result}); //sa blogs na property nakalagay lahat ng documents na meron sa collection
        })
        .catch((err)=>{
            console.log(err);
        })
});


//Sa console lalabas yung iniput ni user sa form. To use the req.body para ma fetch yung laman ng ininput ni user, kailangang mag-create ng panibagong middle which is use method and gamitin yung urlencoded() method na meron si express
// app.post('/blogs', (req, res) => {
//     console.log(req.body); 
// })

router.post('/blogs', (req, res) => {
    const blog = new Blog(req.body); 

    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
})

router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;

    // console.log(id);
    Blog.findById(id)
        .then((result)=>{
            res.render('details', { blogs: result, title: 'Blogs Details'});
        })
        .catch((err)=>{
            console.log(err);
        })  
})

router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({ redirect: '/blogs'});
        })
        .catch((err)=>{
            console.log(err);
        })
})


module.exports = router;