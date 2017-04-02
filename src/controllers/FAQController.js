let FAQ = require('../models/FAQ');

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
    }
}

module.exports = FAQController;