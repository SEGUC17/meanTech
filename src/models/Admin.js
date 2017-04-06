var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requried: true
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