App = angular
    .module('meanTech', ['ngRoute', 'angular-stripe'])
    .config(function(stripeProvider) {
        stripeProvider.setPublishableKey('pk_test_DBMKRqel64aYUUKBgAOOPjKe');
    });
