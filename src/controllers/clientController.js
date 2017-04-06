const Client = require('../models/Client');
const bcrypt = require('bcryptjs');

const clientController = {

    register: function (req, res) {
        let client = new Client(req.body);

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(client.password, salt, function (err, hash) {
                if (err) throw err;
                client.password = hash;

                client.save(function (err, client) {
                    if (err) {
                        res.write('<h1>Username already exists, please choose another one.</h1>');
                        console.log(err);
                    } else {
                        console.log(client);
                    }
                });
            });
        });
    },

    viewProfile: function (req, res) {

        Client.find({ username: req.session.username }, (function (err, clients) {
            if (err)
                res.send(err.message);
            else
                res.render('index', { clients });
        })
        )
    },

    updatePassword: function (req, res) {

        Client.findOneAndUpdate({ _id: req.decoded.id }, { $set: { "password": req.body.newPassword } }, function (err, client) {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: 'You are not allowed to change the password, update failed',
                });
            }
            if (client) {
                res.json({
                    success: true,
                    msg: 'The password has been updated successfully'
                });
                client.markModified('Password ok');
            }
        });
    },

    resetPassword: function (req, res) {
        if (req.decoded.securityAnswer === req.answer) {
            Client.findOneAndUpdate({ _id: req.decoded.id }, { $set: { "password": req.newPassword } }, function (err, client) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        msg: 'You are not allowed to change the password, update failed',
                    });
                }
                if (client) {
                    res.json({
                        success: true,
                        msg: 'The password has been updated successfully'
                    });
                    client.markModified('Password reset ok');
                }
            });
        }

    },

    addToWishList: function (req, res) {

    var  serviceID = req.body.serviceID;
  Client.findOneAndUpdate({_id: req.decoded.id}, {"$push": {"wishList" : serviceID}},function(err, client) {
              if (err) {
                res.status(500).json({success: false, message: 'Got an error'});
              }
              if (client){
                client.markModified('anything');

                return res.json({ success: true, message: 'Successfully added to wishList' });

            }

        });


    },

    addToFavCompanies: function (req, res) {
    var  companyID = req.body.companyID;
    Client.findOneAndUpdate({_id: req.decoded.id}, {"$push": {"favCompanies" : companyID}},function(err, client) {
        if (err) {
            res.json(err);
        }
        if (client){
            return res.json({ success: true, message: 'Successfully added to favCompanies' });
            client.markModified('anything');
        }
    });
    }
}

module.exports = clientController;
