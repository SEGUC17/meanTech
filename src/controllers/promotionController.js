let Promotion = require('../models/Promotion');

module.exports = {
    getAllPromotions: function (req, res) {
        promotion.find(function (err, promotions) {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'You are not allowed to view the promotions, or no promotions are available',
                });
            } else {
                res.json({
                    success: true,
                    data: promotions
                });
            }
        });
    },

    postPromotion: function (req, res) {
        
        let promotion = new Promotion({

            content: req.body.content,
            pictureURL: req.body.pictureURL,
            expiry: req.body.expiry,
            companyID: req.decoded.id
        });
        promotion.save(function (err, promotion) {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                res.json({
                    data: promotion
                });
            }
        })

    },

    updatePromotion: function (req, res) {

        var x;
        Promotion.findOne({
            _id: req.body._id
        }, function (err, pro) {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } else {
                x = pro.companyID;
                if (x === req.decoded.id) {

                    Promotion.findByIdAndUpdate({
                            _id: req.body._id
                        }, {
                            $set: req.body
                        }, {
                            new: true
                        },
                        function (err, promotion) {
                            if (err) {
                                res.status(500).json({
                                    error: err.message
                                });

                            } else {
                                res.json({
                                    data: promotion
                                });

                            }
                        })
                } else {
                    res.json("sorry, you are not authorized to update this promotion");
                }

            }
        })


    },

    viewPromotions: function (req, res) {

        Promotion.find({
            companyID: req.decoded.id
        }, function (err, promotions) {

            if (err)
                res.status(500).json({
                    error: err.message
                });
            else
                res.json({
                    promotions
                });
        })

    },
    deletePromotion: function (req, res) {

        var x;
        Promotion.findOne({
            _id: req.body.id
        }, function (err, pro) {
            if (err) {
                res.status(500).json({
                    error: err.message
                });
            } 
            else {
                x = pro.companyID;

                if (x == req.decoded.id) {

                    Promotion.remove({
                        _id: req.body.id
                    }, function (err, result) {
                        if (err) {
                            res.status(500).json({
                                error: err.message
                            });
                        }
                        res.json({
                            result
                        });
                    });
                } else {
                    res.json("sorry, you are not authorized to delete this promotion");
                }
            }
        });

    },
};