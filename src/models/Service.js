var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var validate = require('mongoose-validator');


var alphaValidator = validate({
    validator: 'isAlphanumeric',
    passIfEmpty: false,
    message: 'Name should contain alpha-numeric characters only',
    httpStatus: 400
  });

  var urlValidator = validate({
    validator: 'isURL',
    passIfEmpty: true,
    message: 'Please provide a valide URL',
    httpStatus: 400
  });



var serviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    availableBookings: {
        type: Number,
        required: true,
        validate:alphaValidator

    },
    duration: {
        type: Number,
        required: true,
        validate:alphaValidator

    },
    description: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,
        validate:alphaValidator
        
    },
    pictureURL: {
        type: String,
        validate:urlValidator

    },
    companyID: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company'
    }

});

var Service = mongoose.model('service', serviceSchema);
module.exports = Service;