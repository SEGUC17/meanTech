const clientController = function ($scope, $location, factory) {
    $scope.clientFavForm = {};

    $scope.addFavCompanies = function addFavCompanies() {

            factory.addFavCompanies($scope.clientFavForm)
              .success(function(data) {
                  alert('Company added to favourites successfully');
            }).error(function(error) {

                  alert(error.message)

            });
    };
}

clientController.$inject = ['$scope', '$location', 'factory'];
App.controller('clientController', clientController);