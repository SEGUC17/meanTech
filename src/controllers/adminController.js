const Admin = require('../models/Admin');
const Company = require('../models/Company');
const companyController = require('../controllers/companyController');
const bcrypt = require('bcryptjs');


module.exports = {

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
            securityQuesion: req.body.question,
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
        const query = {
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
        const verified = false;

        companyController.getUnverfiedCompanies(verified, function (err, Company) {
            if (err) {
                res.send(err);
            } else {
                res.send(Company);
            }
        });
    },

   verifyCompanies: function (req, res) {
        const username = req.body.username;
        const verified = req.body.verified;

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

   deleteCompany: function (req, res) {
        const username = req.body.username;

        companyController.getCompanyAndRemove(username, function (err, Company) {
            if (err) {
                res.send(err);
            } else {
                res.send('complete');
            }
        });
    }
};
