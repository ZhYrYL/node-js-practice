//Kinecreate yung blogController para mas padaliin pa yung pag routing. Ang ginawa dito is tinransfer lahat ng logic ng lahat ng route handlers na meron doon sa blogRoutes.js, nag create ng specific function for each, and then inexport yung mga functions para magamit doon sa pag Express router na nasa blogRoutes after siya doon ma import

const Blog = require('../models/blog');

//logic for homepage
const blog_homepage = (req, res) => {

    Blog.find().sort({ createdAt: -1 }) //yung sort ginamit para masort siya ascending or descending. But dito ang ginawa -1, kaya descending yung pagkaka output sa UI, or yung new documents yung mauuna sa taas palagi
        .then((result)=>{
            res.render('blogs/homepage', { title: 'All Blogs', blogs: result}); //sa blogs na property nakalagay lahat ng documents na meron sa collection
        })
        .catch((err)=>{
            console.log(err);
        })

}

//logic for creating a blog form
const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create Blog'});
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body); 

    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
}

//logic for creating the details of each documents in the database
const blog_details = (req, res) => {
    const id = req.params.id;

    // console.log(id);
    Blog.findById(id)
        .then((result)=>{
            res.render('blogs/details', { blogs: result, title: 'Blogs Details'});
        })
        .catch((err)=>{
            console.log(err);
        })  
}

//logic for deleting a document
const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({ redirect: '/blogs'});
        })
        .catch((err)=>{
            console.log(err);
        })
}


module.exports = {
    blog_homepage,
    blog_create_get,
    blog_create_post,
    blog_details,
    blog_delete
}

