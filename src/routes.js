var express = require('express');
var router = express.Router();
var companyController = require('./controllers/companyController');
var eventController = require('./controllers/eventController');
var serviceController = require('./controllers/serviceController');
var adminController = require('./controllers/adminController');
var loginController = require('./controllers/loginController');
var clientController = require('./controllers/clientController');
var reviewController= require('./controllers/reviewController');

router.post('/company', companyController.companySubscription);
router.post('/event', eventController.createEvent);

router.get('/client',clientController.viewProfile);
router.get('/allEvents', eventController.getAllEvents);
router.get('/allServices', serviceController.getAllServices);
router.post('/adminRegister', adminController.adminRegister);
router.post('/adminLogin', loginController.adminLogin);
router.post('/updateEvents', eventController.updateEvents);
router.get('/companyEvents', eventController.getCompanyEvents);


router.post('/register',clientController.register);

router.post('/review',reviewController.create);


module.exports = router;
