let Service = require('../models/Service');

let serviceController = {
    createService: function (req, res) {
        let service = new Service({
            name: req.body.name,
            availableBookings: req.body.availableBookings,
            duration: req.body.duration,
            description: req.body.description,
            price: req.body.price,
            pictureURL: req.body.pictureURL,
            companyID: req.decoded.id
        });
        service.save(function (err, services) {
            if (err) {
                res.json({
                    error: "Could not create service",
                    data: null
                });
            } else {
                res.json({
                    message: "success"
                });
            }
        })
    },
    deleteService: function (req, res) {
        Service.findOne({
            _id: req.body._id
        }, function (err, service) {
            if (err) {
                res.json({
                    error: "Could not find service",
                    data: null
                });
            } else {
                if (service.companyID == req.decoded.id) {
                    Service.remove({
                        _id: req.body._id,
                    }, function (err) {
                        if (err) {
                            res.json({
                                error: "Could not delete service",
                                data: null
                            });
                        } else {
                            res.json({
                                message: "success"
                            });
                        }
                    });

                } else {
                    res.json({
                        error: "Unauthorized access",
                        data: null
                    });
                }

            }
        })
    },

    updateService: function (req, res) {

        Service.findOne({
            _id: req.body._id
        }, function (err, service) {
            if (err) {
                res.json({
                    error: "Could not find service",
                    data: null
                });
            } else {
                if (service.companyID == req.decoded.id) {
                    var query = {
                        _id: req.body._id
                    };

                    var update = {
                        $set: req.body
                    };

                    var options = {
                        new: true
                    };

                    Service.findByIdAndUpdate(query, update, options, function (err, services) {
                        if (err) {
                            res.json({
                                error: err.message
                            })
                        } else {
                            res.json({
                                data: services
                            });
                        }
                    });

                } else {
                    res.json({
                        error: "Unauthorized access",
                        data: null
                    });
                }

            }
        })
    },

    getAllServices: function (req, res) {
        Service.find({}, '-_id -companyID', function (err, services) {
            if (err)
                res.send(err.message)
            else
                res.send({
                    services
                });
        })
    }
}

module.exports = serviceController;