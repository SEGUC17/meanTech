var mongoose = require('mongoose');
var validate = require('mongoose-validator');

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
var adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: usernameValidator,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        requried: true,
        validate: emailValidator,
    },
    securityQuestion: {
        type: String,
        requried: true
    },
    questionAnswer: {
        type: String,
        requried: true
    }
});

var Admin = module.exports = mongoose.model("admin", adminSchema);