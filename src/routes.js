
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

var config = require('../src/config/token');

router.get('/', function (req, res) {
	res.json({
		hello: 'world'
	});
});
router.get('/contactUs',function(req,res){
    res.render('contactUs')
});
router.get('/company/profile', companyController.viewCompanyProfile);

router.post('/company', companyController.companySubscription);

router.post('/faqa', FAQController.answerFAQ);

router.get('/client', clientController.viewProfile);

router.get('/allEvents', eventController.getAllEvents);

router.get('/allServices', serviceController.getAllServices);

router.post('/adminRegister', adminController.adminRegister);

router.post('/adminLogin', loginController.adminLogin);

router.post('/updateEvents', eventController.updateEvents);

router.get('/companyEvents', eventController.getCompanyEvents);

router.get('/FAQView', FAQController.viewFAQs);

router.post('/register', clientController.register);


router.post('/clientLogin', loginController.clientLogin);

router.post('/companyLogin', loginController.companyLogin);

router.get('/getAllPromotions', promotionController.getAllPromotions);

router.use(function (req, res, next) {

	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	if (token) {

		jwt.verify(token, config.secret, function (err, decoded) {
			if (err) {
				return res.json({
					success: false,
					message: 'Failed to authenticate token.'
				});
			} else {
				req.decoded = decoded;
				next();
			}
		});

	} else {


		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});

	}

});

router.get('/check', function (req, res) {
	res.json(req.decoded);
});

router.post('/faq', function(req,res){
    console.log(req.decoded);

    try {
        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'client') {
            console.log(decodedPayload);

			// res.json( {topSecretResource: 'ay7aga'});
            FAQController.askFAQ(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
		// todo
        console.log(err);
    }
});

router.post('/faqa', function(req,res){
    console.log(req.decoded);

    try {

        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'client') {
            console.log(decodedPayload);

			// res.json( {topSecretResource: 'ay7aga'});
            FAQController.answerFAQ(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
		// todo
        console.log(err);
	}
});

router.post('/review', function(req,res){
    console.log(req.decoded);

    try {

        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'client') {
            console.log(decodedPayload);

			// res.json( {topSecretResource: 'ay7aga'});
            reviewController.create(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
		// todo
        console.log(err);
	}
});

router.post('/deleteR', function(req,res){
    console.log(req.decoded);

    try {

        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'admin') {
            console.log(decodedPayload);

			// res.json( {topSecretResource: 'ay7aga'});
            reviewController.delete(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
		// todo
        console.log(err);
    }
});

router.post('/event', function(req, res) {

    try {

        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'company') {

            eventController.createEvent(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {

        console.log(err);
    }

});



router.post('/clientUpdatePassword', function (req, res) {
    try {
        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'client') {
            console.log(decodedPayload);

            clientController.updatePassword(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/clientResetPassword', function (req, res) {
    try {
        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'client') {
            console.log(decodedPayload);
            console.log("Password reset successful");
            clientController.resetPassword(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/companyUpdatePassword', function (req, res) {
    try {
        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'company') {
            console.log(decodedPayload);

            companyController.updatePassword(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/companyResetPassword', function (req, res) {
    try {
        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'company') {
            console.log(decodedPayload);
            console.log("Password reset successful");
            companyController.resetPassword(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/adminUpdatePassword', function (req, res) {
    try {
        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'admin') {
            console.log(decodedPayload);

            adminController.updatePassword(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/adminResetPassword', function (req, res) {
    try {
        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'admin') {
            console.log(decodedPayload);
            console.log("Password reset successful");
            adminController.resetPassword(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {
        console.log(err);
    }
});


router.post('/addToWishList', function(req, res) {


    try {

        const decodedPayload = req.decoded;
        if (decodedPayload.role === 'client') {

            clientController.addToWishList(req, res);
        } else {
            res.status(401).json({
                error: 'Unauthorized'
            });
        }
    } catch (err) {

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
			companyController.getCompanies(req, res);
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

router.get('/viewMyReviews',function (req,res){
    console.log(req.decoded);
	try {
		const decodedPayload = req.decoded;
		if (decodedPayload.role === 'company') {
			companyController.viewReviews(req, res);
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
