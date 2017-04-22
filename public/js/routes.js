App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController',
        })
        .when('/viewEvents', {
            templateUrl: 'views/viewEvents.html',
            controller: 'eventController',
        })
        .when('/viewRatings', {
            templateUrl: 'views/viewRatings.html',
            controller: 'reviewController',
        })

        .when('/updateEvents', {
            templateUrl: 'views/updateEvents.html',
            controller: 'eventController',

        })
        .when('/answerQuestion', {
            templateUrl: 'views/answerQuestion.html',
            controller: 'questionController',
        })
        .when('/clientRegistration', {
            templateUrl: 'views/clientRegister.html',
            controller: 'registerController',
        })
        .when('/pr', {
            templateUrl: 'views/postReview.html',
            controller: 'reviewController',
        })
});