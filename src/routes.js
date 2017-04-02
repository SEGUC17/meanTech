var express = require('express');
var router = express.Router();
var companyController = require('./controllers/companyController');
var eventController = require('./controllers/eventController');



router.post('/company', companyController.companySubscription);
router.post('/event', eventController.createEvent);

router.get('/client',clientController.viewProfile);





module.exports = router;
