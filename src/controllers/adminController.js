 var Admin = require('../models/Admin');
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