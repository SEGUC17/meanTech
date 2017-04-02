var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


var faqSchema = mongoose.Schema({
    questionText:{
        type:String,
        required:true

    },
    answerText:{
        type:String,
        

    },
  
   clientUsername:{
        type: String ,
        required:true
    }
    })

var FAQ = mongoose.model("faq", faqSchema);

module.exports = FAQ;