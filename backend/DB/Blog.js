const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: String,
    summary: String,
    content: {
        type: String,
        required: true
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
