const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        en: {
            type: String,
            required: true
        },
        hi: {
            type: String,
            required: true
        },
        mr: {
            type: String,
            required: true
        }
        // Add more languages as needed
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: String,
    summary: {
        en: String,
        hi: String,
        mr: String
        // Add more languages as needed
    },
    content: {
        en: {
            type: String,
            required: true
        },
        hi: {
            type: String,
            required: true
        },
        mr: {
            type: String,
            required: true
        }
        // Add more languages as needed
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
