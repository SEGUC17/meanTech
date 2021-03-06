var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    companyID: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

var Review = mongoose.model("review", reviewSchema);
module.exports = Review;