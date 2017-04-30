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
                if (err.errors != null) {

                    if (err.errors.pictureURL) {

                        res.status(400).json({
                            success: false,
                            message: "Please make sure you have provided valid URL"
                        });


                    }

                    if (err.errors.name) {

                        res.status(400).json({
                            success: false,
                            message: "Please make sure you have provided valid Name"
                        });
                    }

                    if (err.errors.availableBookings) {

                        res.status(400).json({
                            success: false,
                            message: "Please make sure you have provided valid available booking"
                        });
                    }

                    if (err.errors.duration) {

                        res.status(400).json({
                            success: false,
                            message: "Please make sure you have provided valid Duration"
                        });
                    }
                    if (err.errors.description) {

                        res.status(400).json({
                            success: false,
                            message: "Please make sure you have provided valid description"
                        });
                    }

                    if (err.errors.price) {

                        res.status(400).json({
                            success: false,
                            message: "Please make sure you have provided valid price"
                        });
                    }

                } else {

                    res.status(500).json({
                        success: false,
                        message: "Please make sure you have provided valid information"
                    });
                }
            } else {

                return res.json({
                    success: true,
                    message: "Service Successfully created"
                });

            }
        });


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

                    Service.findByIdAndUpdate(query, update, {
                        runValidators: true
                    }, function (err, services) {
                        if (err) {
                            if (err.errors != null) {
                                if (err.errors.pictureURL) {
                                    res.status(400).json({
                                        success: false,
                                        message: "Please make sure you have provided valid URL"
                                    });
                                }
                                if (err.errors.name) {

                                    res.status(400).json({
                                        success: false,
                                        message: "Please make sure you have provided valid Name"
                                    });
                                }

                                if (err.errors.availableBookings) {

                                    res.status(400).json({
                                        success: false,
                                        message: "Please make sure you have provided valid available booking"
                                    });
                                }

                                if (err.errors.duration) {

                                    res.status(400).json({
                                        success: false,
                                        message: "Please make sure you have provided valid Duration"
                                    });
                                }
                                if (err.errors.description) {

                                    res.status(400).json({
                                        success: false,
                                        message: "Please make sure you have provided valid description"
                                    });
                                }

                                if (err.errors.price) {

                                    res.status(400).json({
                                        success: false,
                                        message: "Please make sure you have provided valid price"
                                    });
                                }
                            } else {
                                res.status(500).json({
                                    success: false,
                                    message: "Please make sure you have provided valid information"
                                });
                            }
                        } else {
                            res.json({
                                data: services
                            });

                        }
                    })
                } else {
                    res.json("sorry, you are not authorized to update this service");
                }

            }
        })


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
            if (err) {
                res.status(500).json({
                    message: "No services available"
                })
            } else
                res.json({
                    data: services
                });
        });
    },
};

module.exports = serviceController;