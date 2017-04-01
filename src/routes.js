var express = require('express');
var router = express.Router();
<<<<<<< HEAD
=======
var companyController = require('./controllers/companyController');
var eventController = require('./controllers/eventController');



router.post('/company', companyController.companySubscription);
router.post('/event', eventController.createEvent);





>>>>>>> 1a09b8ee247820535400dc3e7a1f2bff5c986c2d

module.exports = router;
