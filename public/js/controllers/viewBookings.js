const viewBookingsController = function ($scope, $location, factory) {

    factory.getBookedEvents().success(function(data) {
        $scope.bookedEvents=data.data;
    });
    factory.getBookedServices().success(function(data) {
        $scope.bookedServices=data.data;
    });



}

viewBookingsController.$inject = ['$scope', '$location', 'factory'];
App.controller('viewBookingsController', viewBookingsController);
