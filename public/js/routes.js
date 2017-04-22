App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
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
});