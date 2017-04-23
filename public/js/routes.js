App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })

        // route for the about page
        // .when('/companyS', {
        //     templateUrl: 'views/subscription.html',
        //     controller: 'companyController'
        // })
        .when('/createEvent', {
            templateUrl: 'views/createEvent.html',
            controller: 'eventController'
        })
        .when('/stripeTest', {
            templateUrl: 'views/stripeTest.html'

        })
        .when('/companyProfile', {
            templateUrl: 'views/viewCompany.html',
            controller: 'viewCompanyController',
        })
        .when('/faqq', {
            templateUrl: 'views/FAQ.html',
            controller: 'FaqControl',
        })
        .when('/ViewReviews', {
            templateUrl: 'views/MyCompRev.html',
            controller: 'getReviewsController',
        })
         .when('/companyList', {
             templateUrl: 'views/companyList.html',
             controller: 'getCompanyListController',
         })
         .when('/CProfile', {
             templateUrl: 'views/viewCompanyProfile.html',
             controller: 'visitCompanyPageController',
         })
          .when('/pr', {
            templateUrl: 'views/postReview.html',
            controller: 'postReviewController',
        });
}]);
