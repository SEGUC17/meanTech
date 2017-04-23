const clientController = function ($scope, $location, factory) {
    $scope.clientFavForm = {};

    $scope.addFavCompanies = function addFavCompanies() {

        factory.addFavCompanies($scope.clientFavForm)
            .success(function(data) {
                alert("Company added to favourites");
            }).error(function(error) {
                alert("Cannot add company to favourites");
            });
    };
}

clientController.$inject = ['$scope', '$location', 'factory'];
App.controller('clientController', clientController);