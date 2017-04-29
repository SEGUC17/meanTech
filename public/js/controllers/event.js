const eventController = function ($scope, $location, factory) {
  if (!factory.getToken() || !factory.isBusinessUser()) {
    $location.path('/');
  } else {
    $scope.selectedEvent = {};
    $scope.showTable = true;

    //------> as a company I can view my events <------

    $scope.getCompanyEvents = function () {
      factory.getCompanyEvents()
        .success(function (response) {
          $scope.sortType = 'name'; // set the default sort type
          $scope.sortReverse = false; // set the default sort order
          $scope.searchFish = ''; // set the default search/filter term
          $scope.events = response.data.map(function (element) {
            element.date = new Date(element.date);
            return element;
          });
        })
        .error(function (response) {
          alert(response);
        });
    };
    //------>calls the functions that views the company's events<-------

    $scope.getCompanyEvents();

    //------> helper function that carries the selected event to be updated  <-------

    $scope.selectEventToBeUpdated = function (event) {
      $scope.selectedEvent = event;
      $scope.showTable = false;
    };

    //------>As a company I can update events I have posted already <-------

    $scope.updateEvent = function () {
      factory.updateEvent($scope.selectedEvent)
        .success(function (response) {
          alert('Event updated successfully');
          $scope.getCompanyEvents();
          $scope.showTable = true;
        })
        .error(function (response) {
          alert(response.message);
        });
    };
    //------>As a company I can delete events I have posted already <-------

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