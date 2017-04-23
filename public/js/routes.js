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
        })
        .when('/postPromotion', {
          templateUrl: 'views/postPromotion.html',
          controller: 'promotionController'
      })
        .when('/updateEvents',{
            templateUrl:'views/updateEvents.html',
            controller:'eventController'
        })
        .when('/viewPromotions', {
            templateUrl: 'views/viewPromotions.html',
            controller: 'promotionController'
        });


        

        
});
