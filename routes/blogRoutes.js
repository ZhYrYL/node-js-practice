const express = require('express');
// const Blog = require('../models/blog');
const router = express.Router();
const blogController = require('../controllers/blogController');


router.get('/blogs', blogController.blog_homepage); //homepage
router.get('/create-blog', blogController.blog_create_get); //create-blog
router.post('/blogs', blogController.blog_create_post); //submitting the form
router.get('/blogs/:id', blogController.blog_details); //details of every document 
router.delete('/blogs/:id', blogController.blog_delete) //for the delete button


module.exports = router;