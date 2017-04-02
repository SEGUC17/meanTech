var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var companyController = require('./controllers/companyController');
var eventController = require('./controllers/eventController');
var FAQController = require('./controllers/FAQController');
var serviceController = require('./controllers/serviceController');
var adminController = require('./controllers/adminController');
var loginController = require('./controllers/loginController');
var promotionController = require('./controllers/promotionController');
var clientController = require('./controllers/clientController');
var reviewController = require('./controllers/reviewController');

router.get('/', function (req, res) {
    res.json({ hello: 'world' });
});


router.get('/company/profile', companyController.viewCompanyProfile);

router.post('/company', companyController.companySubscription);

router.post('/event', eventController.createEvent);

router.post('/faq', FAQController.askFAQ);

router.post('/company', companyController.companySubscription);

router.post('/event', eventController.createEvent);

router.get('/client', clientController.viewProfile);

router.get('/allEvents', eventController.getAllEvents);

router.get('/allServices', serviceController.getAllServices);

router.post('/adminRegister', adminController.adminRegister);

router.post('/adminLogin', loginController.adminLogin);

router.post('/updateEvents', eventController.updateEvents);

//router.get('/companyEvents', eventController.getCompanyEvents);

router.get('/unverifiedCompanies', adminController.unverifiedCompanies);

router.post('/verifyCompanies', adminController.verifyCompanies);

router.get('/viewCompanies', adminController.viewCompanies);

router.post('/deleteCompany', adminController.deleteCompany);

router.get('/FAQ', FAQController.viewFAQs);

router.post('/adminChangePassword', adminController.changePassword);

router.post('/adminResetPassword', adminController.resetPassword);

router.get('/allPromotions', promotionController.getAllPromotions);

router.post('/register', clientController.register);

router.post('/review', reviewController.create);


module.exports = router;
