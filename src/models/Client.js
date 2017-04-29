var mongoose = require('mongoose');
var validate = require('mongoose-validator');

const nameValidator = [
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z]+$/i,
        message: 'Please write your name using letters only.',
    }),
];

const emailValidator = [
    validate({
        validator: 'isEmail',
        message: 'Please enter a valid email.',
    }),
];

const usernameValidator = [ 
    validate({
        validator: 'isLength',
        arguments: [3, 20],
        message: 'Username should be between {ARGS[0]} and {ARGS[1]} characters.',
    }),
    validate({
        validator: 'isAlphanumeric',
        message: 'Username should be letters and numbers only.',
    }),
];

const passwordValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 20],
        message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters.',
    }),
    validate({
        validator: 'isAlphanumeric',
        message: 'Password should be letters and numbers only.',
    }),
];

var clientSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: nameValidator,
    },
    lastName: {
        type: String,
        required: true,
        validate: nameValidator,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        validate: usernameValidator,
    },
    password: {
        type: String,
        required: true,
        validate: passwordValidator,
    },
    profilePictureURL: String,
    email: {
        type: String,
        required: true,
        validate: emailValidator,
        lowercase: true,
    },
    address: String,
    gender: {
        type: String,
        enum: ['Male', 'Female'],
    },
    age: Number,
    DOB: Date,
    socialMediaURL: String,
    phoneNumbers: [String],
    previousEvents: [String],
    securityQuestion: String,
    securityAnswer: String,
    wishList: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Service',
    }],
    favCompanies: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
    }],
    bookedEvents: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Event'
    }],
    bookedServices: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Service'
    }],

});

var Client = mongoose.model("client", clientSchema);

module.exports = Client;
