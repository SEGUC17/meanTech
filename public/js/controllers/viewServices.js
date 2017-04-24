const viewServiceController = function ($scope, $location, factory) {

    factory.getAllServices().success(function(data) {
        $scope.allservices=data.data;
    });

    $scope.pay = function pay(service) {

         factory.setSelectedPurchase(service);

      $location.path('/stripeTest');
    };
}

viewServiceController.$inject = ['$scope', '$location', 'factory'];
App.controller('viewServiceController', viewServiceController);