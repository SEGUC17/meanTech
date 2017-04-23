const eventController = function ($scope, $location, factory) {

    factory.getAllEvents()
    .success(function(data) {

        $scope.allevents= data.events;
    });

    $scope.pay = function pay(event) {

         factory.setSelectedPurchase(event);

      $location.path('/stripeTest');



    };


}

eventController.$inject = ['$scope', '$location', 'factory'];
App.controller('eventController', eventController);
