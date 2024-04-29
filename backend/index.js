const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./DB/ConnectDB');
const User = require('./DB/User');

const cors = require('cors');

//middleware for json parse
app.use(express.json());
// enable cors
app.use(cors());

//registration 
app.post('/signup' , async(req,res)=>{
    try{
        const {username, password, firstName, lastName, dob, phoneNo, gender, farmingKnowledge, organicFarming, farmerCardNo, addressLine1, addressLine2, pinCode, state, preferredLanguage, qualificationLevel} = req.body;
        const user = new User({username, password, firstName, lastName, dob, phoneNo, gender, farmingKnowledge, organicFarming, farmerCardNo, addressLine1, addressLine2, pinCode, state, preferredLanguage, qualificationLevel});
        await user.save();
        res.status(201).json({message:'REGISTRATION SUCCESSFUL'});
    }catch(error){
        res.status(500).json({error:'Registration Failed'});
    }
});

app.post('/login',async(req,res)=>{
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({error:'Invalid username or password'});
        }

        if(user.password !== password){
            return res.status(401).json({error:'Invalid username or password'})
        }

        res.status(200).json({message:'Login successful'});
    }catch(error){
        res.status(500).json({error:'Login failed'});
    }
});

connectDB();

app.listen(port,()=>{
    console.log('Server is listening on 8000');
});
