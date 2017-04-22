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
      .when('/clientViewProfile', {
            templateUrl: 'views/viewProfile.html',
            controller: 'viewProfileController'
        }) 
        .when('/clientUpdateProfile', {
            templateUrl: 'views/clientUpdateProfile.html',
            controller: 'updateProfileController'
        })   

}])
