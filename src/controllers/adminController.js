var Admin = require('../models/Admin');
var Company = require('../models/Company');
var companyController = require('../controllers/companyController');
var bcrypt = require('bcryptjs');


module.exports = {

    comparePassword: function (candidatePassword, hash, callback) {
        bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
            if (err) throw err;
            callback(null, isMatch);
        });
    },

    changePassword: function (req, res) {
        getAdminByUsername.password = req.pw;
    },

    resetPassword: function (req, res) {
        if (req.questionAnswer == getAdminByUsername.answer) {
            getAdminByUsername.password = req.pw;
        } else {
            console.log('there"s a problem here ');
        }
    },

    adminRegister: function (req, res) {
        let newAdmin = new Admin({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            answer: req.body.answer
        });

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(newAdmin.password, salt, function (err, hash) {
                if (err) throw err;
                newAdmin.password = hash;
                newAdmin.save(function (err, newAdmin) {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Admin not registered.'
                        });
                    } else {
                        res.json({
                            success: true,
                            msg: 'Admin registered.'
                        });
                    }
                });
            });
        });
    },

   getAdminByUsername: function (username, callback) {
        var query = {
            username: username
        };
        Admin.findOne(query, callback);
    },




    comparePassword: function (candidatePassword, hash, callback) {
        bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
            if (err) throw err;
            callback(null, isMatch);
        });
    },

    unverifiedCompanies: function (req, res) {
        var verified = false;

        companyController.getUnverfiedCompanies(verified, function (err, Company) {
            if (err) {
                res.send(err);
            } else {
                res.send(Company);
            }
        });
    },

   verifyCompanies: function (req, res) {
        var username = req.body.username;
        var verified = req.body.verified;

        companyController.getCompanyByUsername(username, verified, function (err, Company) {
            if (err) {
                res.send(err);
            } else {
                Company.save(function (err, Company) {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Company was not verified.'
                        });
                    } else {
                        res.json({
                            success: true,
                            msg: 'complete.'
                        });
                    }
                });
            }
        });

    },

    viewCompanies: function (req, res) {
        companyController.getCompanies(function (err, companies) {
            if (err) {
                res.send(err);
            } else {
                res.send(companies);
            }
        });
    },

   deleteCompany: function (req, res) {
        var username = req.body.username;

        companyController.getCompanyAndRemove(username, function (err, Company) {
            if (err) {
                res.send(err);
            } else {
                res.send('complete');
            }
        });
    }
};