const Client = require('../models/Client');
const Company = require('../models/Company');
const Event = require('../models/Event');
const Service = require('../models/Service');
const clientController = {

    // Client can register his information
    register: function (req, res) {
        function getAge(dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }

        let client = new Client(req.body);
        client.age = getAge(req.body.DOB);
        client.save(function (err, client) {
            if (err) {
                if (err.errors != null) {
                    if (err.errors.firstName) {
                        res.status(500).json({
                            success: false,
                            message: err.errors.firstName.message,
                        });
                    } else if (err.errors.lastName) {
                        res.status(500).json({
                            success: false,
                            message: err.errors.lastName.message,
                        });
                    } else if (err.errors.email) {
                        res.status(500).json({
                            success: false,
                            message: err.errors.email.message,
                        });
                    } else if (err.errors.username) {
                        res.status(500).json({
                            success: false,
                            message: err.errors.username.message,
                        });
                    } else if (err.errors.password) {
                        res.status(500).json({
                            success: false,
                            message: err.errors.password.message,
                        });
                    } 
                } else {
                    res.status(500).json({
                        success: false,
                        message: 'Error registering data',
                    });
                }
            } else {
                return res.json({
                    success: true,
                    message: 'New client successfully registered.',
                });
            }
        });
    },

    viewProfile: function (req, res) {
        Client.find({
            username: req.decoded.username,
        }, (function (err, client) {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'can not view profile',

                });
            } else {
                res.json({
                    success: true,
                    data: client,
                });
            }
        }));
    },

    updatePassword: function (req, res) {
        Client.findOneAndUpdate({
            _id: req.decoded.id,
        }, {
            $set: {
                "password": req.body.newPassword,
            },
        }, function (err, client) {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'You are not allowed to change the password, update failed',
                });
            } else {
                res.json({
                    success: true,
                    msg: 'The password has been updated successfully',
                });
                client.markModified('Password ok');
            }
        });
    },

    resetPassword: function (req, res) {
        Client.findOne({
            username: req.body.username,
        }, function (err, client) {
            if (err) res.status(500).json({
                success: false,
                message: 'Error',
            });

            if (!client) {
                res.status(404).json({
                    success: false,
                    message: 'Username not found',
                });
            } else if (client) {
                if (client.securityAnswer != req.body.securityAnswer) {
                    res.status(401).json({
                        success: false,
                        message: 'Authentication failed. Wrong Security Answer.',
                    });
                } else {
                    Client.findOneAndUpdate({
                        username: req.body.username,
                    }, {
                        $set: {
                            'password': req.body.newPassword,
                        },
                    }, function (err, client) {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                msg: 'You are not allowed to change the password, update failed',
                            });
                        } else {
                            res.json({
                                success: true,
                                msg: 'The password has been updated successfully',
                            });
                            client.markModified('Password reset ok');
                        }
                    });
                }
            }
        });
    },


    addToWishList: function (req, res) {
        var serviceID = req.body.serviceID;
        Client.findOneAndUpdate({
            _id: req.decoded.id,
        }, {
            "$push": {
                "wishList": serviceID,
            },
        }, function (err, client) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Got an error',
                });
            }
            if (client) {
                client.markModified('anything');
                return res.json({
                    success: true,
                    message: 'Successfully added to wishList',
                });
            }
        });
    },
    //For clients to add companies to their list of favourites
    addToFavCompanies: function (req, res) {
        var companyID = req.body.companyID;
        Client.findOneAndUpdate({
            _id: req.decoded.id,
        }, {
            "$push": {
                "favCompanies": companyID,
            },
        }, function (err, client) {
            if (err) {
                res.json(err);
            }
            if (client) {
                return res.json({
                    success: true,
                    message: 'Successfully added to favCompanies',
                });
                client.markModified('anything');
            }
        });
    },

    updateProfile: function (req, res) {
        var query = {
            _id: req.decoded.id,
        };

        var update = {
            $set: req.body,
        };

        var options = {
            new: true,
        };

        Client.findByIdAndUpdate(query, update, options, function (err, client) {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'Internal server error',
                });
            } else {
                if (client) {
                    res.json({
                        success: true,
                        msg: 'Update successful',
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        msg: 'Client not found',
                    });
                }
            }
        });
    },

    viewCompanyProfile: function (req, res) {
        var id = req.body._id;

        Company.findById(id, function (err, company) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Failed to find company.',
                });
            } else {
                if (company) {
                    res.json({
                        success: true,
                        message: 'viewing company',
                        company,
                    });
                } else {
                    res.json({
                        success: false,
                        message: 'no existing company',
                        company,

                    });
                }
            }
        });
    },
    addToBookedServices: function (req, res) {
        var serviceID = req.body.serviceID;
        Client.findOneAndUpdate({
            _id: req.decoded.id
        }, {
                "$push": {
                    "bookedServices": serviceID
                }
            }, function (err, client) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: 'Could not book service!'
                    });
                }
                if (client) {
                    client.markModified('anything');
                    return res.json({
                        success: true,
                        message: 'Successfully Booked'
                    });
                }
            });
    },
    addToBookedEvents: function (req, res) {
        var eventID = req.body.eventID;
        Client.findOneAndUpdate({
            _id: req.decoded.id
        }, {
                "$push": {
                    "bookedEvents": eventID
                }
            }, function (err, client) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        message: 'Could not book event!'
                    });
                }
                if (client) {
                    client.markModified('anything');
                    return res.json({
                        success: true,
                        message: 'Successfully Booked'
                    });
                }
            });
    },
    myBookedEvents: function (req, res) {
      Client.findOne({ _id : req.decoded.id })
        .populate({ path: 'bookedEvents', model: Event })
        .exec(function (err, client) {
          if (err) {

            res.status(500).json({
                success: false,
                message: 'error'

            })
        } else {

            res.json({
                success: true,
                data: client.bookedEvents
            })
        };

        })
    },
    myBookedServices: function (req, res) {
      Client.findOne({ _id : req.decoded.id })
        .populate({ path: 'bookedServices', model: Service })
        .exec(function (err, client) {
          if (err) {

            res.status(500).json({
                success: false,
                message: 'error'

            })
        } else {

            res.json({
                success: true,
                data: client.bookedServices
            })
        };

        })
    }
};

module.exports = clientController;
