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
          controller: 'createEventController'
      })
      .when('/stripeTest', {
          templateUrl: 'views/stripeTest.html',
          controller: 'stripeController'

      })
      .when('/allEvents', {
            templateUrl: 'views/allEvents.html',
            controller: 'eventController'
        })

}])
