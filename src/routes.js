var express = require('express');
var router = express.Router();
var companyController = require('./controllers/companyController');
var eventController = require('./controllers/eventController');
var adminController = require('./controllers/adminController');



router.post('/company', companyController.companySubscription);

router.post('/event', eventController.createEvent);

router.post('/admin', adminController.adminRegister);






module.exports = router;
