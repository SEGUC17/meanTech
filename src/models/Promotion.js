var mongoose = require("mongoose");
var validate = require('mongoose-validator');

const urlValidator = [
    validate({
        validator: 'isURL',
        message: 'Please enter a valid URL.'
    }),
];


var promotionSchema = mongoose.Schema({


    content: {
        type: String,
        required: true
    },
    pictureURL: {
        type: String,
        validate: urlValidator
    },
    expiry: {
        type: Date,
        required: true
    },
    companyID: {
        type: String,
        required: true
    }
})

var Promotion = mongoose.model("Promotion", promotionSchema);
module.exports = Promotion;