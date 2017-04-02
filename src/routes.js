var express = require('express');
var router = express.Router();
var companyController = require('./controllers/companyController');
var eventController = require('./controllers/eventController');
var serviceController = require('./controllers/serviceController');
var adminController = require('./controllers/adminController');
var loginController = require('./controllers/loginController');
var promotionController = require('./controllers/promotionController');


router.post('/company', companyController.companySubscription);
router.post('/event', eventController.createEvent);
router.get('/allEvents', eventController.getAllEvents);
router.get('/allServices', serviceController.getAllServices);
router.post('/adminRegister', adminController.adminRegister);
router.post('/adminLogin', loginController.adminLogin);

router.post('/adminChangePassword', adminController.changePassword);
router.post('/adminResetPassword', adminController.resetPassword);
router.get('/allPromotions', promotionController.getAllPromotions);





module.exports = router;
