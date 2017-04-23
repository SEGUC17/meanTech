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
        .when('/stripeTest', {
            templateUrl: 'views/stripeTest.html'

        })

}])