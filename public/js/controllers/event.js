const eventController = function ($scope, $location, factory) {
  if (!factory.getToken() || !factory.isBusinessUser()) {
    $location.path('/');
  } else {

    $scope.eventForm = {};
    $scope.updateForm = {};

    factory.getCompanyEvents().success(function (data) {
    

      $scope.sortType = 'name'; // set the default sort type
      $scope.sortReverse = false; // set the default sort order
      $scope.searchFish = ''; // set the default search/filter term
      $scope.events = data.data;
    });

    $scope.updateEvent = function updateEvent(id) {

    

      $scope.id = {
        id
      };

      // $location.path('http://localhost:8080/updateEvents');


      factory.updateEvent($scope.eventForm, $scope.id)
        .success(function (data) {
        

          alert("Event Successfully Updated!");

        }).error(function (error) {

          alert(error.message);

        });



    };


    $scope.deleteEvent = function deleteEvent(id) {

     
      $scope.id = {
        id
      };
      // $location.path('http://localhost:8080/updateEvent');


      factory.deleteEvent($scope.id)
        .success(function (data) {
       

          alert("Event Successfully delted!");

          // $route.reload(true);
          factory.getCompanyEvents().success(function (data) {
           
            // $scope.sortType = 'name'; // set the default sort type
            // $scope.sortReverse = false; // set the default sort order
            // $scope.searchFish = ''; // set the default search/filter term
            $scope.events = data.data;
          });

        }).error(function (error) {

          alert(error);

        });



    };
  }
};


eventController.$inject = ['$scope', '$location', 'factory'];
App.controller('eventController', eventController);

