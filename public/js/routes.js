App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })

        // route for the about page
        // .when('/companyS', {
        //     templateUrl: 'views/subscription.html',
        //     controller: 'companyController'
        // })
        .when('/createEvent', {
            templateUrl: 'views/createEvent.html',
            controller: 'eventController'
        })
        .when('/stripeTest', {
            templateUrl: 'views/stripeTest.html'

        })
        .when('/CompanyProfile', {
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
        //  .when('/MycompProfile', {
        //      templateUrl: 'views/MyCompPro.html',
        //      controller: 'PrivateCompControl',
        //  });
}]);
