var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
    username: String,
    companyID: String,
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    date: {
        type: Date,
        default: Date.now
    }

})

var Review = mongoose.model("review", reviewSchema);

module.exports = Review;