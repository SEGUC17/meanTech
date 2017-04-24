let Company = require('../models/Company');
let Review = require('../models/Review');

let companyController = {


    companySubscription: function (req, res) {
        let company = new Company({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            city: req.body.city,
            area: req.body.area,
            address: req.body.address,
            description: req.body.description,
            category: req.body.category,
            logoURL: req.body.logoURL,
            email: req.body.email,
            mobileNumbers: req.body.mobileNumbers,
            branches: req.body.branches,
            socialMediaURL: req.body.socialMediaURL,
            verified: false,
            paymentMethod: req.body.paymentMethod,
            securityQuestion: req.body.securityQuestion,
            securityAnswer: req.body.securityAnswer
        });

        company.save(function (err, company) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: "Please choose another Username"
                });
            } else {
                return res.json({
                    success: true,
                    message: 'Successfully Registered!'
                });
            }
        })
    },

    getUnverfiedCompanies: function (verified, callback) {
        var query = {
            verified: verified
        };
        Company.find(query, callback);
    },

    getCompanyByUsername: function (username, verified, callback) {
        var query = {
            username: username
        };

        Company.findOneAndUpdate(query, {
            $set: {
                "verified": verified
            }
        }).exec(callback);
    },

    getCompanies: function (req, res, next) {
        var query = Company.find({}).select('name username');


        query.exec(function (err, company) {
            if (err) return next(err);
            res.json({
                data: company
            });
        });
    },

    getCompanyAndRemove: function (username, callback) {
        var query = {
            username: username
        };
        Company.findOneAndRemove(query, callback);
    },

    updatePassword: function (req, res) {
        Company.findOneAndUpdate({
            _id: req.decoded.id
        }, {
            $set: {
                "password": req.body.newPassword
            }
        }, function (err, company) {
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
                company.markModified('Password ok');
            }
        });
    },

        resetPassword: function (req, res) {
        Company.findOne({
            username: req.body.username
        }, function (err, company) {
            if (err) res.status(500).json({
                success: false,
                message: 'Error'
            });

            if (!company) {
                res.status(404).json({
                    success: false,
                    message: 'Username not found',
                });
            } else if (company) {
                if (company.securityAnswer !== req.body.securityAnswer) {

                    res.status(401).json({
                        success: false,
                        message: 'Authentication failed. Wrong Security Answer.',
                    });
                } else {
                    Company.findOneAndUpdate({
                        username: req.body.username,
                    }, {
                            $set: {
                                'password': req.body.newPassword,
                            },
                        }, function (err, company) {
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
                                company.markModified('Password reset ok');
                            }
                        });

                };

            }

        });

    },


    viewReviews: function (req, res) {
        Review.find({
            companyID: req.decoded.id
        }, function (err, reviews) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'Can not view Reviews'
                });
            } else {
                res.json({
                    success: true,
                    message: 'Successful',
                    reviews
                });
            }
        })
    },

    viewMyProfile: function (req, res){
        Company.find({ username: req.decoded.username }, function (err, company) {
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
      getCompanyList: function (req, res) {
        // var query = Company.find({});


        // query.exec(function (err, companies) {
        //     if (err) return next(err);
        //     res.json({
        //         data: companies
        //     });
        // });
        Company.find({},function(err,companies){
            if(err)
                res.status(500).json({
                    success: false,
                    message: 'No companies to view',
                    data:null
                });
                else    
                    res.json({
                        data: companies
                    });
        });

    },
}

module.exports = companyController;
