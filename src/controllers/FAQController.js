var FAQ = require('../models/FAQ');

module.exports.viewFAQs = function(req, res, next) {

    var query = FAQ.find({}).select('questionText answerText clientUsername');

    query.exec(function (err, FAQ) {
        if (err) return next(err);
        res.send(FAQ);
    });
};
