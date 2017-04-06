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


module.exports.companyLogin =function(req, res){

    Company.findOne({
    		username: req.body.username
    	}, function(err, company) {

    		if (err) console.log(err);

    		if (!company) {

    			res.json({ success: false, message: 'Authentication failed. User not found.' });
    		} else if (company) {

    			// check if password matches
    			if (company.password != req.body.password) {
          //  req.flash("messages", { "error" : "Invalid username or password" });
                //    res.locals.messages = req.flash();
    				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    			} else {

    				// if user is found and password is right
    				// create a token
            var token = jwt.sign({
              name: company.name,
                username: company.username,
                id: company._id,
                role: 'company',
            }, config.secret , {
    					expiresIn: 86400 // expires in 24 hours
    				});
        //   req.flash("messages", { "success" : "Sign Up Success" });
    				res.json({
    					success: true,
    					message: 'Success',
    					token: token
    				});
    			}

    		}

    	});




      }


  module.exports.clientLogin =function(req, res){

          Client.findOne({
          		username: req.body.username
          	}, function(err, client) {

          		if (err) console.log(err);

          		if (!client) {

          			res.json({ success: false, message: 'Authentication failed. User not found.' });
          		} else if (client) {

          			// check if password matches
          			if (client.password != req.body.password) {
                //  req.flash("messages", { "error" : "Invalid username or password" });
                      //    res.locals.messages = req.flash();
          				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          			} else {

          				// if user is found and password is right
          				// create a token
                  var token = jwt.sign({
                    name: client.name,
                      username: client.username,
                      id: client._id,
                      role: 'client',
                      securityAnswer: client.securityAnswer,
                  }, config.secret , {
          					expiresIn: 86400 // expires in 24 hours
          				});
              //   req.flash("messages", { "success" : "Sign Up Success" });
          				res.json({
          					success: true,
          					message: 'Success',
          					token: token
          				});
          			}

          		}

          	});




            }

    


