const express = require('express');
const port = 8000;
const connectDB = require('./DB/ConnectDB');
const User = require('./DB/User');
const Blog = require('./DB/Blog');

const cors = require('cors');
const morgon = require('morgan');
const colors=require('colors');
const app = express();


//middleware for json parse
app.use(express.json());
// enable cors
app.use(cors());
app.use(morgon)

//registration 
app.post('/signup' , async(req,res)=>{
    try{
        const {firstName,lastName,phoneNo, password} = req.body;
        const user = new User({firstName, lastName, phoneNo, password});
        await user.save();
        console.log(req.body);
        res.status(201).json({message:'REGISTRATION SUCCESSFUL'});
    }catch(error){
        res.status(500).json({error:'Registration Failed'});
    }
});

app.post('/login',async(req,res)=>{
    try{
        const {phoneNo, password} = req.body;
        const user = await User.findOne({phoneNo});
        if(!user){
            return res.status(401).json({error:'Invalid name or password'});
        }

        if(user.password !== password){
            return res.status(401).json({error:'Invalid name or password'})
        }

        res.status(200).json({message:'Login successful'});
    }catch(error){
        res.status(500).json({error:'Login failed'});
    }
});
app.post('/blog', async (req, res) => {
    try {
        const { title, image, summary, content } = req.body;
        const blog = new Blog({ title, image, summary, content });
        await blog.save();
        console.log(req.body);
        res.status(201).json({ message: 'Blog post created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create blog post' });
    }
});

connectDB();

app.listen(port,()=>{
    console.log('Server is listening on 8000');
});
