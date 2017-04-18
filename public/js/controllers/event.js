const eventController = function ($scope, $location, factory, $log) {
  $scope.eventForm = {};

    $scope.createEvent = function createEvent() {


        if ($scope.eventForm != undefined) {
            factory.createEvent($scope.eventForm)
              .success(function(data) {
                $log.info(JSON.stringify(data, null, 4));

            }).error(function(data) {
                $log.error('error');
            });

        }

    };

}

eventController.$inject = ['$scope', '$location', 'factory', '$log'];
App.controller('eventController', eventController);
