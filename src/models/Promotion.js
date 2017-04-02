var mongoose = require("mongoose");

var Promotion = mongoose.Schema({


 content:{
        type:String,
        required:true
    },
pictureURL:{
    type:String
},
expiry:{
    type:Date,
    required:false
},
serviceProviderID:{
    type:String,
    required:true,
    unique:true
}
    
})

var Promotion = mongoose.model( "Promotion", Promotion);
module.exports = Promotion;