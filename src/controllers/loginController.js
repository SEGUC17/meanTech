var adminController = require('../controllers/adminController');
var Admin = require('../models/Admin');
let Company = require('../models/Company');
let Client = require('../models/Client');

var jwt = require('jsonwebtoken');
var config = require('../config/token');

module.exports = {
    adminLogin: function (req, res) {
        var username = req.body.username;
        var password = req.body.password;

        adminController.getAdminByUsername(username, function (err, Admin) {
            if (err) throw err;

            if (!Admin) {
                return res.json({
                    success: false,
                    msg: 'Admin not available.'
                })
            }

            adminController.comparePassword(password, Admin.password, function (err, isMatch) {
                if (err) throw err;

                if (isMatch) {
                    var token = jwt.sign({
                        username: Admin.username,
                        id: Admin._id,
                        role: 'admin',
                        securityAnswer: Admin.securityAnswer,

                    }, config.secret, {
                            expiresIn: 604800
                        });
                    res.json({
                        success: true,
                        token: token,
                        admin: {
                            id: Admin._id,
                            username: Admin.username,
                            email: Admin.email,
                        }
                    });
                } else {
                    return res.json({
                        success: false,
                        msg: 'Wrong password.'
                    })
                }
            });
        });

    }
}


module.exports.companyLogin = function (req, res) {

    Company.findOne({
        username: req.body.username
    }, function (err, company) {

        if (err) res.status(500).json({
            success: false,
            message: 'Got an error'
        });


        if (!company) {

            res.status(404).json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if (company) {

            if (company.verified == true) {
                if (company.password != req.body.password) {

                    res.status(401).json({
                        success: false,
                        message: 'Authentication failed. Wrong password.'
                    });
                } else {


                    var token = jwt.sign({
                        name: company.name,
                        username: company.username,
                        id: company._id,
                        securityAnswer: company.securityAnswer,
                        role: 'company',

                    }, config.secret, {
                            expiresIn: 86400
                        });

                    res.json({
                        success: true,
                        message: 'Success',
                        token: token
                    });
                }
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Unautherized access. Not a verified Company'
                });
            }

        }

    });




}


module.exports.clientLogin = function (req, res) {

    Client.findOne({
        username: req.body.username
    }, function (err, client) {

        if (err) res.status(500).json({
            success: false,
            message: 'Got an error'
        });


        if (!client) {

            res.status(404).json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if (client) {


            if (client.password != req.body.password) {

                res.status(401).json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                });
            } else {


                var token = jwt.sign({
                    name: client.name,
                    username: client.username,
                    id: client._id,
                    securityAnswer: client.securityAnswer,
                    role: 'client',
                }, config.secret, {
                        expiresIn: 86400
                    });

                res.json({
                    success: true,
                    message: 'Success',
                    token: token
                });
            }

        }

    });





}