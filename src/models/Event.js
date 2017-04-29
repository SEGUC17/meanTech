var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var validate = require('mongoose-validator');


var alphaValidator = validate({
    validator: 'isAlphanumeric',
    passIfEmpty: false,
    message: 'Name should contain alpha-numeric characters only',
    httpStatus: 400
  });

 
 var textValidator= validate({
  validator: 'matches',
  arguments: ['^[a-zA-Z\-0-9-" "]+$', 'i']
});


  var urlValidator = validate({
    validator: 'isURL',
    passIfEmpty: true,
    message: 'Please provide a valide URL',
    httpStatus: 400
  });



var eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    details: {
        type: String,
        required: true,
        validate:textValidator,

    },
    date: {
        type: Date,
        required: true,
        min: Date.now

    },
    durationMins: {
        type: Number,
        required: true,
        validate:alphaValidator,



    },
    address: {
        type: String,
        required: true,
        validate:textValidator,

    },
    pictureURL: {
        type: String,
        required: true,
        validate:urlValidator,

    },
    category: {
        type: String,
        required: true,
        validate:textValidator,


    },

    contacts: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        default: false,


    },

    companyID: { type: mongoose.Schema.ObjectId, ref: 'Company' }




})

var Event = mongoose.model("event", eventSchema);

module.exports = Event;
