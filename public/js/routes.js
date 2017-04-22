App.config(function ($routeProvider) {
    $routeProvider
        .when('/unverifiedCompanies', {
            templateUrl: 'views/unverifiedCompanies.html',
            controller: 'adminController',

        })
        .when('/verifyCompanies', {
            templateUrl: 'views/verifyCompanies.html',
            controller: 'adminController',

        })
        .when('/viewCompanies', {
            templateUrl: 'views/viewCompanies.html',
            controller: 'companyController',

        })
        .when('/deleteCompany', {
            templateUrl: 'views/deleteCompany.html',
            controller: 'adminController',

        })
        .when('/FAQView', {
            templateUrl: 'views/FAQView.html',
            controller: 'FAQController',

        })
        .when('/adminRegister', {
            templateUrl: 'views/adminRegister.html',
            controller: 'adminController',

        })
        .when('/adminLogin', {
            templateUrl: 'views/adminLogin.html',
            controller: 'loginController',

        })
        .when('/adminHome', {
            templateUrl: 'views/adminHome.html',
        })
});