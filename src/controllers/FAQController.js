let FAQ = require('../models/FAQ');

let FAQController = {

    answerFAQ: function (req, res) {

        FAQ.findOneAndUpdate({ clientUsername:req.body.clientUsername , questionText: req.body.questionText}, { answerText:req.body.answerText}, function (err, faq) {
            if (err) {
                console.log(err);
            } else {
                console.log(faq);
            }
        })
    },

    askFAQ: function (req, res) {

        let newQ = new FAQ(req.body);
        console.log(req.body);

        newQ.save(function (err, newQ) {

            if (err)
                res.send(err.message)
            else {
                res.send('Success')
            }
        })

    },

}

module.exports = FAQController;