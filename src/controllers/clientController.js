const Client = require('../models/Client');
const Company = require('../models/Company');

const clientController = {

    register: function (req, res) {
        let client = new Client(req.body);

        client.save(function (err, client) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Error registering data.'
                });
            } else {
                return res.json({
                    success: true,
                    message: 'New client successfully registered.'
                });
            }
        });
    },

    viewProfile: function (req, res) {

        Client.find({
            username: req.decoded.username
        }, (function (err, client) {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'can not view profile'

                })
            } else {
                res.json({
                    success: true,
                    data: client
                })
            };
        }))
    },

    updatePassword: function (req, res) {


        Client.findOneAndUpdate({
            _id: req.decoded.id
        }, {
            $set: {
                "password": req.body.newPassword
            }
        }, function (err, client) {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'You are not allowed to change the password, update failed',
                });
            } else {

                res.json({
                    success: true,
                    msg: 'The password has been updated successfully'
                });
                client.markModified('Password ok');
            }
        });
    },

    resetPassword: function (req, res) {
        if (req.decoded.securityAnswer === req.body.securityAnswer) {
            Client.findOneAndUpdate({
                _id: req.decoded.id
            }, {
                $set: {
                    "password": req.body.newPassword
                }
            }, function (err, client) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        msg: 'You are not allowed to change the password, update failed',
                    });
                } else {
                    res.json({
                        success: true,
                        msg: 'The password has been updated successfully'
                    });
                    client.markModified('Password reset ok');
                }
            });
        }
        else
        {
            res.status(500).json({
                success: false,
                msg: 'Wrong security answer',
            });
        }
    },

    addToWishList: function (req, res) {
        var serviceID = req.body.serviceID;
        Client.findOneAndUpdate({
            _id: req.decoded.id
        }, {
            "$push": {
                "wishList": serviceID
            }
        }, function (err, client) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Got an error'
                });
            }
            if (client) {
                client.markModified('anything');
                return res.json({
                    success: true,
                    message: 'Successfully added to wishList'
                });
            }
        });
    },

    addToFavCompanies: function (req, res) {
        var companyID = req.body.companyID;
        Client.findOneAndUpdate({
            _id: req.decoded.id
        }, {
            "$push": {
                "favCompanies": companyID
            }
        }, function (err, client) {
            if (err) {
                res.json(err);
            }
            if (client) {
                return res.json({
                    success: true,
                    message: 'Successfully added to favCompanies'
                });
                client.markModified('anything');
            }
        });
    },

    updateProfile: function (req, res) {
        var query = {
            _id: req.decoded.id
        };

        var update = {
            $set: req.body
        };

        var options = {
            new: true
        };

        Client.findByIdAndUpdate(query, update, options, function (err, client) {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'update fail'

                })
            } else {
                res.json({
                    success: true,
                    msg: 'update success'
                });
            }
        });
    },

    viewCompanyProfile: function (req, res) {
        var id = req._id;
        console.log(id);
        Company.findById(id, function (err, company) {

            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Failed to find company.'
                });
            }
            else {
                if (company ){
                        res.json({
                        success: true,
                        message: 'viewing company',
                        company,
                    });
                     }
                else {

                          res.json({
                        success: false,
                        message: 'no existing company',
                        company,
                        
                    });
                     }

            }

        });
    },
};

module.exports = clientController;