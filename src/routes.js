var express = require('express');
var router = express.Router();

var companyController = require('./controllers/companyController');
var eventController = require('./controllers/eventController');
var FAQController = require ('./controllers/FAQController');


router.get('/company/profile',companyController.viewCompanyProfile);

router.post('/company', companyController.companySubscription);
router.post('/event', eventController.createEvent);
router.post('/faq',FAQController.askFAQ);






module.exports = router;
