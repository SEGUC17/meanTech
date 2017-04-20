const eventController = function ($scope,getCompanyEvents, $location, factory) {
  $scope.eventForm = {};

    $scope.createEvent = function createEvent() {



            factory.createEvent($scope.eventForm)
              .success(function(data) {

              alert("Event Successfully created!")

            }).error(function(error) {

              alert(error.message)

            });



    };

$scope.updateForm={};

    $scope.updateEvents = function updateEvents() {


          $scope.hello = "Update form";
            factory.updateEvents($scope.updateForm)
              .success(function(data) {

              alert("Event Successfully updated!")

            }).error(function(error) {

              alert(error.message)

            });



    };

}

eventController.$inject = ['$scope', '$location', 'factory'];
App.controller('eventController', eventController);