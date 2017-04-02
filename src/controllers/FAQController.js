let FAQ = require('../models/FAQ');

let FAQController = {

    askFAQ:function(req,res){

        let newQ = new FAQ (req.body);
        console.log(req.body);

        newQ.save(function(err,newQ){

        if(err)
            res.send(err.message)
        else{
            res.send('Success')
        }
        })

    },


}

module.exports = FAQController;