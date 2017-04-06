let Client = require('../models/Client');
let bcrypt = require('bcryptjs');

let clientController = {

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

    updatePassword: function (req,res) {

        Client.findOneAndUpdate({_id: req.decoded.id }, {$set:{ "password" : req.body.newPassword } }, function(err, client) {
            if (err) {
                res.json({
                    success: false,
                    msg: 'You are not allowed to change the password, update failed',
                });
            }
            if (client){
                res.json({
                    success: true,
                    msg: 'The password has been updated successfully'
                }); 
                client.markModified('Password ok');
            }
        });
    },

    resetPassword: function (req,res) {
        if (req.decoded.securityAnswer === req.answer) {
            Client.findOneAndUpdate({_id: req.decoded.id }, {$set:{ "password" : req.newPassword }}, function(err, client) {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'You are not allowed to change the password, update failed',
                    });
                }
                if (client){
                    res.json({
                        success: true,
                        msg: 'The password has been updated successfully'
                    }); 
                    client.markModified('Password reset ok');
                }
            });
        }

    },

    /*  updateProfile: function(req , res){
          client.update({
              _id: client.getElementbyId(req.body.id)
          },
          {    if (id = firstName.id)
              $set:{

                  firstName : req.body.firstName,
                  lastName : req.body.lastName,
                  username : req.body.username,
                  password : req.body.password,
                  profilePictureURL : req.body.profilePictureURL,
                  email : req.body.email,
                  address : req.body.address,
                  socialMediaUrl : req.body.socialMediaUrl,
                  phoneNumbers : req.body.phoneNumbers,
                  gender : req.body.gender,
                  age : req.body.age,
                  securityQuestion : req.body.securityQuestion,
                  securityAnswer : req.body.securityAnswer


              }
          }
              )
    } */
    /*updateProfile : function (req , res ){
        _id: client.getElementbyId(req.body.id)
        if  ( { _id: })
     { $set:
        {
    }*/
    addToWishList: function (req, res) {
    var  serviceID = req.body.serviceID;
  Client.findOneAndUpdate({_id: req.decoded.id}, {"$push": {"wishList" : serviceID}},function(err, client) {
              if (err) {
                console.log('got an error');
              }
              if (client){
                return res.json({ success: true, message: 'Successfully added to wishList' });
           console.log("Added to Wishlist");
            client.markModified('anything');
            }

            });


    }






}

module.exports = clientController;
