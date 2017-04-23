const eventController = function ($scope, $location, factory) {
  $scope.eventForm = {};
  $scope.updateForm = {};

  factory.getCompanyEvents().success(function (data) {
    console.log("it gets to the controller");
    console.log(data);

    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false; // set the default sort order
    $scope.searchFish = ''; // set the default search/filter term
    $scope.events = data.data;
  });

  $scope.updateEvent = function updateEvent(id) {

    console.log(id);

    $scope.id = {
      id
    };

    // $location.path('http://localhost:8080/updateEvents');


    factory.updateEvent($scope.eventForm, $scope.id)
      .success(function (data) {
        console.log("it gets to the CTRL of view ratings");

        alert("Event Successfully Updated!");

      }).error(function (error) {

        alert(error.message);

      });



  };


  $scope.deleteEvent = function deleteEvent(id) {

    console.log(id);
    $scope.id = {
      id
    };
    // $location.path('http://localhost:8080/updateEvent');


    factory.deleteEvent($scope.id)
      .success(function (data) {
        console.log("it gets to the CTRL of delete event");

        alert("Event Successfully delted!");

        // $route.reload(true);
        factory.getCompanyEvents().success(function (data) {
          // console.log("it gets to the controller");
          // console.log(data);

          // $scope.sortType = 'name'; // set the default sort type
          // $scope.sortReverse = false; // set the default sort order
          // $scope.searchFish = ''; // set the default search/filter term
          $scope.events = data.data;
        });

      }).error(function (error) {

        alert(error);

      });



  };







};


eventController.$inject = ['$scope', '$location', 'factory'];
App.controller('eventController', eventController);