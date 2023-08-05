const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    }
}, { timestamps: true});

const Blog = mongoose.model('Blog', blogSchema); //Yung string na "Blog" ganyan pangalan, kasi dapat pareho siya sa name ng database. And kailangan naka wrap talaga sa model yung schema para malagyan ng laman yung kincreate na columns

module.exports = Blog;