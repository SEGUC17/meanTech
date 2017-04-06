const Admin = require('../models/Admin');
const Company = require('../models/Company');
const companyController = require('../controllers/companyController');
const bcrypt = require('bcryptjs');


let adminController= {

    adminRegister: function (req, res) {
        let admin = new Admin({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            securityQuestion: req.body.securityQuestion,
            securityAnswer: req.body.securityAnswer,
        });

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(admin.password, salt, function (err, hash) {
                if (err) throw err;
                admin.password = hash;
                admin.save(function (err, admin) {
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
    },
      
    updatePassword: function (req,res) {
        Admin.findOneAndUpdate({username: req.decoded.username }, { $set: {"password" : req.body.newPassword } }, function(err, admin) {
            if (err) {
                console.log(err);
                console.log('update password failed ');
            }
            if (admin){
                console.log("Password updated");
                admin.markModified('Password ok');
            }

        });
    },

    resetPassword: function (req,res) {
        if (req.decoded.securityAnswer === req.answer) {
            Admin.findOneAndUpdate({username: req.decoded.username }, { $set:{ "password" : req.newPassword } }, function(err, admin) {
                if (err) {
                    console.log('reset password failed ');
                }
                if (admin){
                    console.log("Password reset successful");
                    admin.markModified('Password reset ok');
                }
            });
        }
    
    }
};

module.exports = adminController;

