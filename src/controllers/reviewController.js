let Review = require('../models/Review');

let reviewController = {

    // Client can review a company
    create: function (req, res) {
        let review = new Review({
            username: req.decoded.username,
            companyID: req.body.companyID,
            content: req.body.content,
            rating: req.body.rating,
        });

        review.save(function (err, review) {
            if (err) {
                if (err.errors != null) {
                    if (err.errors.content) {
                        res.status(500).json({
                            success: false,
                            message: 'Please write your review.',
                        });
                    } else if (err.errors.rating) {
                        res.status(500).json({
                            success: false,
                            message: 'Please choose your rating for the company.',
                        });
                    }
                } else {
                    res.status(500).json({
                        success: false,
                        message: 'Error creating review.',
                    });
                }
            } else {
                return res.json({
                    success: true,
                    message: 'Review created successfully.',
                });
            }
        });
    },

    // Admin can delete a review
    delete: function (req, res) {
        Review.findOneAndRemove({
            _id: req.body.id,
        }, function (err) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Error deleting data.',
                });
            } else {
                return res.json({
                    success: true,
                    message: 'Review deleted successfully.',
                });
            }
        });
    },

    // as a client i can view ratings of any company
    viewRatings: function (req, res) {
        Review.find({
            companyID: req.body._id,
        }, function (err, review) {
            if (err)

                res.json({
                    error: "An error in the viewing ratings",
                    data: null,
                });
            else
                res.json({
                    error: null,
                    data: review,
                });
        });
    },
};

module.exports = reviewController;