var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


var companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    username: {
        type: String,
        required: true,
        unique: true


    },
    password: {
        type: String,
        required: true

    },
    city: {
        type: String,
        required: true

    },
    area: {
        type: String,
        required: true

    },
    address: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true

    },
    category: {
        type: String,
        required: true

    },
    logoURL: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true

    },

    mobileNumbers: {
        type: [String],
        required: true

    },
    branches: {
        type: [String],
        required: true

    },
    socialMediaURL: {
        URL: String

    },
    verified: {
        type: Boolean,
        default: false

    },
    paymentMethod: {
        type: String,
        required: true
    },
    securityQuestion: {
        type: String,
        required: true
    },
    securityAnswer: {
        type: String,
        required: true
    }
})

var Company = mongoose.model("company", companySchema);

module.exports = Company;