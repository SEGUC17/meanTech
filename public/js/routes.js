App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
});

App.config(function ($routeProvider) {
    $routeProvider
        .when('/logout', {
            templateUrl: 'views/login.html',
            controller: 'logoutController'
        })
});

App.config(function ($routeProvider) {
    $routeProvider
        .when('/allEvents', {
            templateUrl: 'views/allEvents.html',
            controller: 'eventController'
        })
});

App.config(function ($routeProvider) {
    $routeProvider
        .when('/allServices', {
            templateUrl: 'views/allServices.html',
            controller: 'serviceController'
        })
});

App.config(function ($routeProvider) {
    $routeProvider
        .when('/favCompanies', {
            templateUrl: 'views/favComp.html',
            controller: 'clientController'
        })
});