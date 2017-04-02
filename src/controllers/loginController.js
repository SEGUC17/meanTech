var adminController = require('../controllers/adminController');
var Admin = require('../models/Admin');
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
                        role: 'admin',
                    }, config.secret, {
                        expiresIn: 604800
                    });
                    res.json({
                        success: true,
                        token: token,
                        admin: {
                            id: Admin._id,
                            username: Admin.username,
                            email: Admin.email
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