var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    availableBookings: {
        type: Number,
        required: true

    },
    duration: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true

    },
    pictureURL: {
        type: String

    },
    companyID: { type: mongoose.Schema.ObjectId, ref: 'Company' }

});

var Service = mongoose.model('service', serviceSchema);
module.exports = Service;