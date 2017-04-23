const createEventController = function ($scope, $location, factory) {
  $scope.eventForm = {};

    $scope.createEvent = function createEvent() {



            factory.createEvent($scope.eventForm)
              .success(function(data) {

              alert("Event Successfully created!")

            }).error(function(error) {

              alert(error.message)

            });



    };

}

createEventController.$inject = ['$scope', '$location', 'factory'];
App.controller('createEventController', createEventController);
