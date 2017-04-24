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

         .when('/adminUpdatePassword', {
            templateUrl: 'views/adminUpdatePassword.html',
            controller: 'updatePasswordController',
        })

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
            templateUrl: 'views/askQuestion.html',
            controller: 'askQuestionController',
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
        })

        .when('/clientViewProfile', {
            templateUrl: 'views/viewProfile.html',
            controller: 'viewProfileController'
        })
        .when('/clientUpdateProfile', {
            templateUrl: 'views/clientUpdateProfile.html',
            controller: 'updateProfileController'
        })
        .when('/unverifiedCompanies', {
            templateUrl: 'views/unverifiedCompanies.html',
            controller: 'adminController',

        })
        .when('/verifyCompanies', {
            templateUrl: 'views/verifyCompanies.html',
            controller: 'adminController',

        })
        .when('/viewCompanies', {
            templateUrl: 'views/viewCompanies.html',
            controller: 'adminViewCompanyController',

        })
        .when('/deleteCompany', {
            templateUrl: 'views/deleteCompany.html',
            controller: 'adminController',

        })
        .when('/FAQView', {
            templateUrl: 'views/FAQView.html',
            controller: 'FAQController',

        })
        .when('/adminRegister', {
            templateUrl: 'views/adminRegister.html',
            controller: 'adminController',

        })
        .when('/adminLogin', {
            templateUrl: 'views/adminLogin.html',
            controller: 'adminLoginController',

        })

}]);