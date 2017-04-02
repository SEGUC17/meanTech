var express = require('express');
var router = express.Router();
var serviceController = require('./controllers/serviceController');
let Service = require('./models/Service');

router.get('/serviceView', serviceController.getServices);
router.post('/serviceView', serviceController.deleteService);

module.exports = router;
