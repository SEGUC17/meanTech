const viewEventController = function ($scope, $location, factory) {

    factory.getAllEvents().success(function(data) {
        $scope.allevents=data.data;
    });
    $scope.pay = function pay(event) {

         factory.setSelectedPurchase(event);

      $location.path('/stripeTest');



    };



}

viewEventController.$inject = ['$scope', '$location', 'factory'];
App.controller('viewEventController', viewEventController);