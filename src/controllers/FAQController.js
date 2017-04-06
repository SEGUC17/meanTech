let FAQ = require('../models/FAQ');

let FAQController = {

    answerFAQ: function (req, res) {
        FAQ.findByIdAndUpdate({
            _id: req.body.id
        }, {
            $set: {
                "answerText": req.body.answerText,
            }
        }, {
            new: true
        }, function (err, faq) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Answer not updated.'
                })
            } else {
                rerturn res.json({
                    success: true,
                    message: 'Answer updated successfully.'
                })
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