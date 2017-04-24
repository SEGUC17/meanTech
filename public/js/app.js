App = angular
    .module('meanTech', ['ngRoute', 'angular-stripe', 'ui.bootstrap'])
    .config(function(stripeProvider) {
        stripeProvider.setPublishableKey('pk_test_DBMKRqel64aYUUKBgAOOPjKe');
    });

App.controller('mainController', ['$scope', 'factory', function($scope, factory) {
    $scope.isLoggedIn = factory.getToken;
		$scope.getUsername = factory.getUsername;
}]);
