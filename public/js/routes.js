App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController',
        })
        .when('/userViewAllPromotions', {
            templateUrl: 'views/userViewAllPromotions.html',
            controller: 'userViewAllPromotionsController',
        })

        .when('/clientUpdatePassword', {
            templateUrl: 'views/clientUpdatePassword.html',
            controller: 'updatePasswordController',
        })

        .when('/companyUpdatePassword', {
            templateUrl: 'views/companyUpdatePassword.html',
            controller: 'updatePasswordController',
        })

        // TODO admin update

        .when('/clientResetPassword', {
            templateUrl: 'views/clientResetPassword.html',
            controller: 'resetPasswordController',
        })

        .when('/companyResetPassword', {
            templateUrl: 'views/companyResetPassword.html',
            controller: 'resetPasswordController',
        })

        .when('/adminResetPassword', {
            templateUrl: 'views/adminResetPassword.html',
            controller: 'resetPasswordController',
        })

        .when('/viewEvents', {
            templateUrl: 'views/viewEvents.html',
            controller: 'eventController',
        })
        .when('/viewRatings', {
            templateUrl: 'views/viewRatings.html',
            controller: 'reviewController'
        })
        .when('/updateEvents/:id', {
            templateUrl: 'views/updateEvents.html',
            controller: 'eventController'

        })
        // route for the about page
        .when('/companyS', {
            templateUrl: 'views/subscription.html',
            controller: 'companyController'
        })
        .when('/createEvent', {
            templateUrl: 'views/createEvent.html',
            controller: 'createEventController'
        })
        .when('/stripeTest', {
            templateUrl: 'views/stripeTest.html',
            controller: 'stripeController'

        })
        .when('/allEvents', {
            templateUrl: 'views/allEvents.html',
            controller: 'viewEventController'
        })
        .when('/allServices', {
            templateUrl: 'views/allServices.html',
            controller: 'viewServiceController'
        })
        .when('/favCompanies', {
            templateUrl: 'views/favComp.html',
            controller: 'clientController'
        })
        .when('/postPromotion', {
            templateUrl: 'views/postPromotion.html',
            controller: 'promotionController'
        })
        .when('/viewPromotions', {
            templateUrl: 'views/viewPromotions.html',
            controller: 'promotionController'
        })
        .when('/createService', {
            templateUrl: 'views/createService.html',
            controller: 'serviceController'
        })
        .when('/viewServices', {
            templateUrl: 'views/companyServices.html',
            controller: 'serviceController'
        })
        .when('/updateService', {
            templateUrl: 'views/updateService.html',
            controller: 'serviceController'
        })
        .when('/answerQuestion', {
            templateUrl: 'views/answerQuestion.html',
            controller: 'questionController',
        })
        .when('/clientRegistration', {
            templateUrl: 'views/clientRegister.html',
            controller: 'registerController',
        })
        .when('/deleteReview', {
            templateUrl: 'views/deleteReview.html',
            controller: 'reviewController',
        })
        .when('/companyProfile', {
            templateUrl: 'views/viewCompany.html',
            controller: 'viewCompanyController',
        })
        .when('/faqq', {
            templateUrl: 'views/FAQ.html',
            controller: 'FaqControl',
        })
        .when('/ViewReviews', {
            templateUrl: 'views/MyCompRev.html',
            controller: 'getReviewsController',
        })
        .when('/companyList', {
            templateUrl: 'views/companyList.html',
            controller: 'getCompanyListController',
        })
        .when('/CProfile', {
            templateUrl: 'views/viewCompanyProfile.html',
            controller: 'visitCompanyPageController',
        })
        .when('/pr', {
            templateUrl: 'views/postReview.html',
            controller: 'postReviewController',
        });
}]);
