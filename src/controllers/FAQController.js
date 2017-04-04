var FAQ = require('../models/FAQ');

let FAQController = {

    answerFAQ: function (req, res) {
        // need to set clientUsername --> session
        let faq = new FAQ(req.body);

        faq.save(function (err, faq) {
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
    viewFAQs: function (req, res, next) {

        var query = FAQ.find({}).select('questionText answerText clientUsername');

        query.exec(function (err, faq) {
            if (err) return next(err);
            res.send(faq);
        });
    },

}

module.exports = FAQController;