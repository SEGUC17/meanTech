 var Admin = require('../models/Admin');
 var Company = require('../models/Company');
 var companyController = require('../controllers/companyController');
 var bcrypt = require('bcryptjs');

 module.exports.adminRegister = function (req, res) {
     let newAdmin = new Admin({
         username: req.body.username,
         password: req.body.password,
         email: req.body.email
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
 }

 module.exports.getAdminByUsername = function (username, callback) {
     var query = {
         username: username
     };
     Admin.findOne(query, callback);
 }

 module.exports.comparePassword = function (candidatePassword, hash, callback) {
     bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
         if (err) throw err;
         callback(null, isMatch);
     });
 }

 module.exports.unverifiedCompanies = function (req, res) {
     var verified = false;

     companyController.getUnverfiedCompanies(verified, function (err, Company) {
         if (err) {
             res.send(err);
         } else {
             res.send(Company);
         }
     });
 }

 module.exports.verifyCompanies = function (req, res) {
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

 }

 module.exports.viewCompanies = function (req, res) {
     companyController.getCompanies(function (err, companies) {
         if (err) {
             res.send(err);
         } else {
             res.send(companies);
         }
     });
 }

 module.exports.deleteCompany = function (req, res) {
         var username = req.body.username;

         companyController.getCompanyAndRemove(username, function(err, Company){
                if(err){
                    res.send(err);
                }else{
                    res.send('complete');
                }
         });
 }