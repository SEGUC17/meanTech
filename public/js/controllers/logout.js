const logoutController = function ($scope, $location, factory) {
    $scope.logout = function logout() {

          factory.logout($scope.logout)

        .success(function(data) {
               factory.setToken(null);

            }).error(function(error) {
                alert(error.message);
            });
}

logoutController.$inject = ['$scope', '$location', 'factory'];
App.controller('logoutController', logoutController);