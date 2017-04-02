let Review = require('../models/Review');

let reviewController = {

    create: function (req, res) {
        // need to set username --> session
        // need to set companyID --> company that is being reviewed
        let review = new Review(req.body);

        review.save(function (err, review) {
            if (err) {
                console.log(err);
            } else {
                console.log(review);
            }
        })
    }
}

module.exports = reviewController;