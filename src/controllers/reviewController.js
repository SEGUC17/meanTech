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
                res.status(500).json({
                    success: false,
                    message: 'Error creating review.'
                })
            } else {
                rerturn res.json({
                    success: true,
                    message: 'Review created successfully.'
                })
            }
        });
    },

    delete: function (req, res) {
        Review.findOneAndRemove({
            _id: req.body.id
        }, function (err) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Error deleting data.'
                })
            } else {
                rerturn res.json({
                    success: true,
                    message: 'Review deleted successfully.'
                })
            }
        });
    },
};

module.exports = reviewController;