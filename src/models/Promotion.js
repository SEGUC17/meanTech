var mongoose = require("mongoose");

var promotionSchema = mongoose.Schema({


    content: {
        type: String,
        required: true
    },
    pictureURL: {
        type: String
    },
    expiry: {
        type: Date,
        required: true
    },
    companyID: {
        type: String,
        required: true,

    }

})

var Promotion = mongoose.model("Promotion", promotionSchema);
module.exports = Promotion;