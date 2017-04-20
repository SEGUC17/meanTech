App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
    
        .when('/viewEvents', {
            templateUrl: 'views/viewEvents.html',
            controller: 'getCompanyEvents'
        })

        .when('/updateEvents',{
            templateUrl:'views/updateEvents.html',
            controller:'eventController'

        })
});
