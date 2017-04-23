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
            controller: 'eventController'
        })
        .when('/viewRatings', {
            templateUrl: 'views/viewRatings.html',
            controller: 'reviewController'
        })
        .when('/updateEvents/:id', {
            templateUrl: 'views/updateEvents.html',
            controller: 'eventController'

        })
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
            controller: 'eventController'
        })
        .when('/allServices', {
            templateUrl: 'views/allServices.html',
            controller: 'serviceController'
        })
        .when('/favCompanies', {
            templateUrl: 'views/favComp.html',
            controller: 'clientController'
        })
}]);
