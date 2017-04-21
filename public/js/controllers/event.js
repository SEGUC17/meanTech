const eventController = function ($scope, $location, factory) {
    $scope.eventForm = {};

    $scope.getAllEvents = function getAllEvents() {

            factory.getAllEvents($scope.eventForm)
              .success(function(data) {

            }).error(function(error) {

              alert(error.message)

            });
    };
}

eventController.$inject = ['$scope', '$location', 'factory'];
App.controller('eventController', eventController);