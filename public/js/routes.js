App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })

        // route for the about page
        .when('/companyS', {
            templateUrl: 'views/subscription.html',
            controller: 'companyController'
        })
        .when('/createEvent', {
            templateUrl: 'views/createEvent.html',
            controller: 'eventController'
        })
        .when('/stripeTest', {
            templateUrl: 'views/stripeTest.html'

        })
        .when('/comp/profile', {
            templateUrl: 'views/CompPro.html',
            controller: 'compControl',
        })
        .when('/faqq', {
            templateUrl: 'views/FAQ.html',
            controller: 'faqControl',
        })
        .when('/viewReviews', {
            templateUrl: 'views/MyCompRev.html',
            controller: 'reviewControl',
        })
         .when('/MycompProfile', {
             templateUrl: 'views/MyCompPro.html',
             controller: 'compControl2',
         });
}]);
