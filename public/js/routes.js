App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
       .when('/clientProfile', {
            templateUrl: 'views/viewProfile.html',
            controller: 'viewProfileController'
        })  
});
