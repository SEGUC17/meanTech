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
    }
}

module.exports = clientController;