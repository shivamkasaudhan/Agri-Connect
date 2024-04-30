const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNo:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;
