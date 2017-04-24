const createEventController = function($scope, $location, factory) {
    if (!factory.getToken() || !factory.isBusinessUser()) {
        $location.path('/');
    } else {
        $scope.eventForm = {};
// Function used by company to create an event
        $scope.createEvent = function() {
            factory.createEvent($scope.eventForm)
                .success(function(data) {
                    alert("Event Successfully created!")

                }).error(function(error) {
                    alert(error.message)

                });
        };
    }
}

createEventController.$inject = ['$scope', '$location', 'factory'];
App.controller('createEventController', createEventController);
