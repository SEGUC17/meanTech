var express = require('express');
var router = express.Router();
var companyController = require('./controllers/companyController');
var eventController = require('./controllers/eventController');
var adminController = require('./controllers/adminController');
var loginController = require('./controllers/loginController');
var clientController = require('./controllers/clientController');


router.post('/company', companyController.companySubscription);

router.post('/event', eventController.createEvent);

router.post('/adminRegister', adminController.adminRegister);

router.post('/adminLogin', loginController.adminLogin);

router.post('/register',clientController.register);


module.exports = router;
