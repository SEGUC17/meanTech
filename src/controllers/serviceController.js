let Service = require('../models/Service');
var express = require('express');
var router = express.Router();

let serviceController = {
    getServices: function (req, res) {

        Service.find(function (err, service) {

            if (err)
                res.send(err.message);
            else
                res.render('serviceView', {service});
        })
    },
    createService: function (req, res) {
        let service = new Service(req.body);

        service.save(function (err, service) {
            if (err) {
                console.log("error");
            } else {
                console.log("service created");
            }
        })
    },
    deleteService: function (req, res) {
        Service.remove({
            _id: req.body._id
        }, function (err) {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Service deleted successfully");
            }
        });
    },
    updateService: function (req, res) {
        service.update({
            _id: service.getElemenyById(req.body._id)
        }, {
            $set: {
                name: req.body.name
            }
        })
    }
}
module.exports = router;
module.exports = serviceController;