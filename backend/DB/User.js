const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    farmingKnowledge: {
        type: String,
        required: true
    },
    organicFarming: {
        type: Boolean,
        default: false
    },
    farmerCardNo: {
        type: String
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    pinCode: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    preferredLanguage: {
        type: String
    },
    qualificationLevel: {
        type: String
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;
