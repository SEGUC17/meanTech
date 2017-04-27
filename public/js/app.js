App = angular
    .module('meanTech', ['ngRoute', 'angular-stripe', 'ui.bootstrap'])
    .config(function (stripeProvider) {
        stripeProvider.setPublishableKey('pk_test_DBMKRqel64aYUUKBgAOOPjKe');
    });

App.controller('mainController', ['$scope', 'factory', function ($scope, factory) {
    $scope.isLoggedIn = factory.getToken;
    $scope.getUsername = factory.getUsername;
    $scope.isBusinessUser = factory.isBusinessUser;
    $scope.isAdminUser = factory.isAdminUser;
    $scope.isClientUser = factory.isClientUser;
    // $scope.logout = factory.logout;
}]);
