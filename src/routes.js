var express = require('express');
var jwt = require('jsonwebtoken')
var router = express.Router();

var companyController = require('./controllers/companyController');
var eventController = require('./controllers/eventController');
var adminController = require('./controllers/adminController');
var loginController = require('./controllers/loginController');

var Company = require('./models/Company');



router.post('/company', companyController.companySubscription);

router.post('/event', eventController.createEvent);

router.post('/adminRegister', adminController.adminRegister);

router.post('/adminLogin', loginController.adminLogin);

router.get('/unverifiedCompanies', adminController.unverifiedCompanies);

router.post('/verifyCompanies', adminController.verifyCompanies);

router.get('/viewCompanies', adminController.viewCompanies);

router.post('/deleteCompany', adminController.deleteCompany);





module.exports = router;
