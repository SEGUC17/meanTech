const Admin = require('../models/Admin');
const Company = require('../models/Company');
const companyController = require('../controllers/companyController');
const bcrypt = require('bcryptjs');

const adminController = {


    adminRegister: function (req, res) {
        const admin = new Admin({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            securityQuestion: req.body.securityQuestion,
            questionAnswer: req.body.questionAnswer,
        });

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(admin.password, salt, function (err, hash) {
                if (err) throw err;
                admin.password = hash;
                admin.save(function (err, admin) {
                    if (err) {
                        res.status(500).json({
                            success: false,

                            msg: 'Please Provide All required information and choose a unique username.'

                        });
                    } else {
                        res.json({
                            success: true,
                            msg: 'Admin registered.',
                        });
                    }
                });
            });
        });
    },

    getAdminByUsername: function (username, callback) {
        const query = {
            username: username,
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
        const verified = false;

        companyController.getUnverfiedCompanies(verified, function (err, Company) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json({ data: Company });
            }
        });
    },

    verifyCompanies: function (req, res) {
        const username = req.body.username;
        const verified = req.body.verified;

        companyController.getCompanyByUsername(username, verified, function (err, Company) {
            if (err) {
                res.status(500).json(err);
            } else {

                if (Company) {
                    Company.save(function (err, Company) {
                        if (err) {
                            res.status(500).json({
                                success: false,
                                msg: 'Company was not verified review the username given.'
                            });
                        } else {
                            res.json({
                                success: true,
                                msg: 'complete.'
                            });
                        }
                    });
                } else {
                    res.status(500).json('Company not found review username');
                }

            }
        });
    },

    deleteCompany: function (req, res) {
        const username = req.body.username;

        companyController.getCompanyAndRemove(username, function (err, Company) {
            if (Company) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.json('complete');
                }
            } else {
                res.status(500).json('Company not found.')
            }
        });
    },



    updatePassword: function (req, res) {
        Admin.findOneAndUpdate({ username: req.decoded.username }, { $set: { "password": req.body.newPassword } }, function (err, admin) {

            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'You are not allowed to change the password, update failed',
                });
            }
            else {

                res.json({
                    success: true,
                    msg: 'The password has been updated successfully'
                });

                admin.markModified('Password ok');
            }
        });
    },

    resetPassword: function (req, res) {
        if (req.decoded.securityAnswer === req.answer) {

            Admin.findOneAndUpdate({ username: req.decoded.username }, { $set: { "password": req.newPassword } }, function (err, admin) {

                if (err) {
                    res.status(500).json({
                        success: false,
                        msg: 'You are not allowed to change the password, update failed',
                    });
                }
                else {

                    res.json({
                        success: true,
                        msg: 'The password has been updated successfully'
                    });

                    admin.markModified('Password reset ok');
                }
            });
        }

    }
};

module.exports = adminController;