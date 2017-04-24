let FAQ = require('../models/FAQ');

let FAQController = {

    answerFAQ: function (req, res) {
        FAQ.findByIdAndUpdate({
            _id: req.body._id,
        }, {
            $set: {
                "answerText": req.body.answerText,
            },
        }, {
            new: true,
        }, function (err, faq) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Answer not updated.'
                })
            } else {
                return res.json({
                    success: true,
                    message: 'Answer updated successfully.'
                })
            }
        });
    },

    askFAQ: function (req, res) {
        let newQ = new FAQ({
            questionText: req.body.questionText,
            clientUsername: req.decoded.username,
        });

        newQ.save(function (err, newQ) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'can not ask question'
                });
            } else {
                res.json({
                    success: true,
                    message: 'question posted',
                    newQ
                });
            }
        });
    },

    viewFAQs: function (req, res, next) {
        var query = FAQ.find({}).select('questionText answerText clientUsername');

        query.exec(function (err, faq) {
            if (err) return next(err);
            res.json({
                data: faq
            });
        });
    },
};

module.exports = FAQController;
