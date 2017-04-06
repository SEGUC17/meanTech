let FAQ = require('../models/FAQ');

let FAQController = {

    answerFAQ: function (req, res) {
        FAQ.findOneAndUpdate({
            clientUsername: req.decoded.username,
            questionText: req.body.questionText
        }, {
            answerText: req.body.answerText
        }, function (err, faq) {
            if (err) {
                console.log(err);
            } else {
                console.log(faq);
            }
        });
    },

    askFAQ: function (req, res) {
        let newQ = new FAQ({
            questionText: req.body.questionText,
            clientUsername: req.decoded.username
        });

        newQ.save(function (err, newQ) {
            if (err) {
                console.log(err);
            } else {
                console.log(newQ);
            }
        });
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
