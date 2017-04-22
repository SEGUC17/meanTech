const eventController = function ($scope, $location, factory) {

    factory.getAllEvents().success(function(data) {
        $scope.allevents=data.data;
    });
}

eventController.$inject = ['$scope', '$location', 'factory'];
App.controller('eventController', eventController);