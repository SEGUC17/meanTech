let Client = require('../models/Client');

let clientController = {

    register: function (req, res) {
        let client = new Client(req.body);

        client.save(function (err, client) {
            if (err) {
                res.write('<h1>Username already exists, please choose another one.</h1>');
                console.log(err);
            } else {
                console.log(client);
            }
        })
    },


    viewProfile: function (req, res) {

        Client.find({ username: req.decoded.username }, (function (err, client) {


            if (err)
                res.send(err.message);
            else
                res.send(200);
        })
        )
    },
     updateProfile: function(req , res){
          client.update({
              _id: client.getElementbyId(req.body.id)
          },
          {    
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


              },function (err, client) {
                if (err) {
                    res.send(err.message)
                    console.log(err);
                } else {
                    console.log(client);
                    
                    res.send(200);

                }
            }
          })
    } ,
    
    addToWishList: function (req, res, serviceID) {
  Client.findOneAndUpdate({_id: req.decoded.id}, {"$push": {"wishList" : serviceID}},function(err, client) {
              if (err) {
                console.log('got an error');
              }
              if (client){
           console.log("Added to Wishlist");
            client.markModified('anything');
            }

            });


    }





}

module.exports = clientController;
