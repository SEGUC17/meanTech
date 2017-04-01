var express = require('express');
var router = express.Router();
var companyController = require('./controllers/companyController');
var eventController = require('./controllers/eventController');
var eventController = require('./controllers/eventController');
var serviceController = require('./controllers/serviceController');


router.post('/company', companyController.companySubscription);
router.post('/event', eventController.createEvent);
router.get('/events', eventController.getAllEvents);
router.get('/services', serviceController.getAllServices);





module.exports = router;
