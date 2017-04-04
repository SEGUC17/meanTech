const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const companyController = require('./controllers/companyController');
const eventController = require('./controllers/eventController');
const FAQController = require('./controllers/FAQController');
const serviceController = require('./controllers/serviceController');
const adminController = require('./controllers/adminController');
const loginController = require('./controllers/loginController');
const promotionController = require('./controllers/promotionController');
const clientController = require('./controllers/clientController');
const reviewController = require('./controllers/reviewController');

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

router.get('/companyEvents', eventController.getCompanyEvents);

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
