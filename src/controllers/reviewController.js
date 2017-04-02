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
    },

    delete: function (req, res) {

        Review.findOneAndRemove({ username: req.body.username, companyID: req.body.companyID }, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Review is deleted.');
            }
        })
    }

}

module.exports = reviewController;