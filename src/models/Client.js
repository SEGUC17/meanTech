
var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePictureURL: String,
    email: {
        type: String,
        required: true,
    },
    address: String,
    gender: Boolean,
    age: Number,
    socialMediaURL: String,
    phoneNumbers: [String],
    previousEvents: [String],
    securityQuestion: String,
    securityAnswer: String

})

var Client = mongoose.model("client", clientSchema);

module.exports = Client;