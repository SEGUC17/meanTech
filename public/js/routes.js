App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
    
        .when('/viewEvents', {
            templateUrl: 'views/viewEvents.html',
            controller: 'eventController'
        })
         .when('/viewRatings', {
            templateUrl: 'views/viewRatings.html',
            controller: 'reviewController'
       
        });


        

        
});
