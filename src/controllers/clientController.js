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
                res.send(err);
            else {
                res.send(200);
                console.log(client)
            }
        })
        )
    },
    updateProfile: function (req, res) {
        var query = {
            _id: req.decoded.id
        };

        var update = {
            $set: req.body
        };

        var options = {
            new: true
        };

        Client.findByIdAndUpdate(query, update, options, function (err, client) {
                if (err) {
                    res.json({ error: err.message })
                } else {
                    res.json({ data: client });
                }
            }
        );
    },

    addToWishList: function (req, res, serviceID) {
        Client.findOneAndUpdate({ _id: req.decoded.id }, { "$push": { "wishList": serviceID } }, function (err, client) {
            if (err) {
                console.log('got an error');
            }
            if (client) {
                console.log("Added to Wishlist");
                client.markModified('anything');
            }

        });


    }





}

module.exports = clientController;
