const eventController = function ($scope, $location, factory) {
  if (!factory.getToken()) {
    $location.path('/');
  } else {
    $scope.selectedEvent = {};
    $scope.showTable = true;

    $scope.constructDate = function (dateString) {
      return new Date(dateString);
    };

    $scope.getCompanyEvents = function () {
      factory.getCompanyEvents()
        .success(function (response) {
          $scope.sortType = 'name'; // set the default sort type
          $scope.sortReverse = false; // set the default sort order
          $scope.searchFish = ''; // set the default search/filter term
          $scope.events = response.data;
        })
        .error(function (response) {
          alert(response);
        });
    };

    $scope.getCompanyEvents();

    $scope.selectEventToBeUpdated = function (event) {
      $scope.selectedEvent = event;
      $scope.showTable = false;
    };

    $scope.updateEvent = function () {
      factory.updateEvent($scope.selectedEvent)
        .success(function (response) {
          alert('Event updated successfully');
          $scope.getCompanyEvents();
          $scope.showTable = true;
        })
        .error(function (response) {
          alert(response.error);
        });
    };

    $scope.deleteEvent = function deleteEvent(id) {
      $scope.id = {
        id
      };

      factory.deleteEvent($scope.id)
        .success(function (response) {
          alert("Event Successfully deleted!");
          $scope.getCompanyEvents();
        }).error(function (response) {
          alert(response);
        });
    };
  }
};

eventController.$inject = ['$scope', '$location', 'factory'];
App.controller('eventController', eventController);