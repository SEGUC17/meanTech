var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


var eventSchema = mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    details:{
        type:String,
        required:true

    },
   date:{
        type: Date ,
        required:true,
        min : Date.now

    },
    durationMins:{
        type:Number,
        required:true

    },
    address:{
        type:String,
        required:true

    },
    pictureURL:{
        type:String,
        required:true

    },
    category:{
        type:String,
        required:true

    },

    contacts:{
        type:[String],
        required:true

    },
    price:{
        type: Number,
        default: false


    },

    companyID:{type :mongoose.Schema.ObjectId, ref: 'Company'}




})

var Event = mongoose.model("event", eventSchema);

module.exports = Event;
