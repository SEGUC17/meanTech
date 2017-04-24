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
        service.save(function (err, service) {
            if (err) {

                res.status(500).json({
                    success: false,
                    message: 'Could not create service'
                });
            } else {

                return res.json({
                    success: true,
                    message: 'Service Successfully created'
                });

            }
        })
    },

    deleteService: function (req, res) {
        Service.findOne({
            _id: req.body.id
        }, function (err, service) {
          
            if (err) {
                res.json({
                    error: 'Could not find service',
                    data: null
                });
            } else {
                if (service.companyID == req.decoded.id) {
                    Service.remove({
                        _id: req.body.id,
                    }, function (err) {
                        if (err) {
                            res.json({
                                error: 'Could not delete service',
                                data: null
                            });
                        } else {
                            res.json({
                                message: 'success'
                            });
                        }
                    });

                } else {
                    res.json({
                        error: 'Unauthorized access',
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
        });
    },

    viewServices: function (req, res) {

        Service.find({
            companyID: req.decoded.id
        }, function (err, services) {

            if (err)
                res.status(500).json({
                    error: err.message
                });
            else
                res.json({
                    services
                });
        })

    },

    getAllServices: function (req, res) {
        Service.find({}, function (err, services) {
            if (err){
                res.status(500).json({
                    message: "No services available"
                })
            }
            else
                res.json({
                    data: services
                });
        });
    },
};

module.exports = serviceController;