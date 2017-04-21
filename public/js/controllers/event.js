const eventController = function ($scope, $location, factory) {
  $scope.eventForm = {};
  $scope.updateForm = {};

  $scope.createEvent = function createEvent() {



    factory.createEvent($scope.eventForm)
      .success(function (data) {

        alert("Event Successfully created!");

      }).error(function (error) {

        alert(error.message);

      });



  };


  factory.getCompanyEvents().success(function (data) {
    console.log("it gets to the controller");
    console.log(data);

    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false; // set the default sort order
    $scope.searchFish = ''; // set the default search/filter term
    $scope.events = data.data;
  });

  $scope.updateEvent = function updateEvent() {



    factory.updateEvent($scope.eventForm)
      .success(function (data) {

        alert("Event Successfully Updated!");

      }).error(function (error) {

        alert(error.message);

      });



  };



};

eventController.$inject = ['$scope', '$location', 'factory'];
App.controller('eventController', eventController);