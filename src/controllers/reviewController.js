let Review = require('../models/Review');

let reviewController = {

    create: function (req, res) {
        let review = new Review({
            username: req.decoded.username,
            companyID: req.body.companyID,
            content: req.body.content,
            rating: req.body.rating
        });

        review.save(function (err, review) {
            if (err) {
                console.log(err);
            } else {
                console.log(review);
            }
        });
    },

    delete: function (req, res) {
        Review.findOneAndRemove({
            username: req.body.username,
            companyID: req.body.companyID
        }, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Review is deleted.');
            }
        });
    },
};

module.exports = reviewController;
