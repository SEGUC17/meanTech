const serviceController = function ($scope, $location, factory) {
    $scope.serviceForm = {};

    $scope.getAllServices = function getAllServices() {

            factory.getAllServices($scope.serviceForm)
              .success(function(data) {

            }).error(function(error) {

              alert(error.message)

            });
    };
}

serviceController.$inject = ['$scope', '$location', 'factory'];
App.controller('serviceController', serviceController);