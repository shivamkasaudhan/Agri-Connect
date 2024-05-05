const express = require('express');
const port = 8000;
const connectDB = require('./DB/ConnectDB');
const User = require('./DB/User');
const Blog = require('./DB/Blog');
const Product = require('./DB/AddProduct')

const cors = require('cors');
const app = express();

// Middleware for JSON parsing
app.use(express.json());
// Enable CORS
app.use(cors());

// Registration
app.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, phoneNo, password } = req.body;
        const user = new User({ firstName, lastName, phoneNo, password });
        await user.save();
        console.log(req.body);
        res.status(201).json({ message: 'REGISTRATION SUCCESSFUL' });
    } catch (error) {
        res.status(500).json({ error: 'Registration Failed' });
    }
});

// Login
app.post('/login', async (req, res) => {
    try {
        const { phoneNo, password } = req.body;
        const user = await User.findOne({ phoneNo });
        if (!user) {
            return res.status(401).json({ error: 'Invalid name or password' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid name or password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

// Create a new blog post
app.post('/addblog', async (req, res) => {
    try {
        const { title_en, title_hi, title_mr, image, summary_en, summary_hi, summary_mr, content_en, content_hi, content_mr } = req.body;
        // Create objects containing language-specific content
        const title = {
            en: title_en,
            hi: title_hi,
            mr: title_mr
            // Add more languages as needed
        };
        const summary = {
            en: summary_en,
            hi: summary_hi,
            mr: summary_mr
            // Add more languages as needed
        };
        const content = {
            en: content_en,
            hi: content_hi,
            mr: content_mr
            // Add more languages as needed
        };
        const blog = new Blog({ title, image, summary, content });
        await blog.save();
        console.log(req.body);
        res.status(201).json({ message: 'Blog post created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create blog post' });
    }
});



// Fetch all blogs
app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

// Create a new product
app.post('/add-product', async (req, res) => {
    try {
        const { title, description, image, price, phoneNo } = req.body;
        const product = new Product({ title, description, image, price, phoneNo });
        await product.save();
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add product', message: error.message });
    }
});

app.get('/blogs/:id', async (req, res) => {
    try {
      const blogId = req.params.id;
      // Retrieve the blog post from the database based on the blogId
      const blog = await Blog.findById(blogId);
      if (!blog) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      // If the blog post is found, send it as a response
      res.json(blog);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      res.status(500).json({ error: 'Failed to fetch blog post' });
    }
  });
  app.get('/profile/:phoneNo', async (req, res) => {
    try {
        const phoneNo = req.params.phoneNo;
        // Retrieve the user from the database based on the phone number
        const user = await User.findOne({ phoneNo: phoneNo });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // If the user is found, send it as a response
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});
app.get('/profile/:phoneNo/products', async (req, res) => {
    try {
        const { phoneNo } = req.params;
        // Query products by phoneNo
        const products = await Product.find({ phoneNo });
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch products', message: error.message });
    }
});


  
  

connectDB();

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
