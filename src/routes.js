var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../src/config/token');

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
	res.json({
		hello: 'world'
	});
});

router.get('/company/profile', companyController.viewCompanyProfile);

router.post('/company', companyController.companySubscription);

router.post('/faq', FAQController.askFAQ);

router.get('/client', clientController.viewProfile);

router.get('/allEvents', eventController.getAllEvents);

router.get('/allServices', serviceController.getAllServices);

router.post('/adminRegister', adminController.adminRegister);

router.post('/adminLogin', loginController.adminLogin);

router.post('/updateEvents', eventController.updateEvents);

router.get('/companyEvents', eventController.getCompanyEvents);

router.get('/FAQView', FAQController.viewFAQs);

router.post('/adminChangePassword', adminController.changePassword);

router.post('/adminResetPassword', adminController.resetPassword);

router.get('/allPromotions', promotionController.getAllPromotions);

router.post('/register', clientController.register);

router.post('/review', reviewController.create);

router.post('/clientLogin', loginController.clientLogin);

router.post('/companyLogin', loginController.companyLogin);

router.use(function (req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, config.secret, function (err, decoded) {
			if (err) {
				return res.json({
					success: false,
					message: 'Failed to authenticate token.'
				});
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});

	}

});

router.get('/check', function (req, res) {
	res.json(req.decoded);
});

router.post('/event', function (req, res) {
	console.log(req.decoded);

	try {

		const decodedPayload = req.decoded;
		if (decodedPayload.role === 'company') {
			console.log(decodedPayload);

			// res.json( {topSecretResource: 'ay7aga'});
			eventController.createEvent(req, res);
		} else {
			res.status(401).json({
				error: 'Unauthorized'
			});
		}
	} catch (err) {
		//todo
		console.log(err);
	}

});

router.post('/wishList', function (req, res) {
	console.log(req.decoded);

	try {

		const decodedPayload = req.decoded;
		if (decodedPayload.role === 'client') {
			console.log(decodedPayload);

			// res.json( {topSecretResource: 'ay7aga'});
			clientController.addToWishList(req, res, "58e1ff07a5a4f5a17354a363");
		} else {
			res.status(401).json({
				error: 'Unauthorized'
			});
		}
	} catch (err) {
		//todo
		console.log(err);
	}

});

router.get('/unverifiedCompanies', function (req, res) {
	console.log(req.decoded);

	try {
		const decodedPayload = req.decoded;
		if (decodedPayload.role === 'admin') {
			adminController.unverifiedCompanies(req, res);
		} else {
			res.status(401).json({
				error: 'Unauthorized.'
			});
		}
	} catch (err) {
		console.log(err);
	}
});

router.post('/verifyCompanies', function (req, res) {
	console.log(req.decoded);

	try {
		const decodedPayload = req.decoded;
		if (decodedPayload.role === 'admin') {
			adminController.verifyCompanies(req, res);
		} else {
			res.status(401).json({
				error: 'Unauthorized.'
			});
		}
	} catch (err) {
		console.log(err)
	}
});

router.get('/viewCompanies', function (req, res) {
	console.log(req.decoded);
	try {
		const decodedPayload = req.decoded;
		if (decodedPayload.role === 'admin') {
			adminController.viewCompanies(req, res);
		} else {
			res.status(401).json({
				error: 'Unauthorized.'
			});
		}
	} catch (err) {
		console.log(err);
	}
});

router.post('/deleteCompany', function (req, res) {
	console.log(req.decoded);
	try {
		const decodedPayload = req.decoded;
		if (decodedPayload.role === 'admin') {
			adminController.deleteCompany(req, res);
		} else {
			res.status(401).json({
				error: 'Unauthorized.'
			});
		}
	} catch (err) {
		console.log(err);
	}
});






module.exports = router;