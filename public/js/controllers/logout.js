const logoutController = function ($scope, $location, factory) {
    $scope.logout = function logout() {

          factory.logout($scope.logout)

        .success(function(data) {
               factory.setToken(null);
               console.log(factory.getToken());
            }).error(function(error) {
                alert("Cannot logout");
            });
    }
}
logoutController.$inject = ['$scope', '$location', 'factory'];
App.controller('logoutController', logoutController);