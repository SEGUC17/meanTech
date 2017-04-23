const logoutController = function ($scope, $location, factory) {
    $scope.logout = function logout() {
        factory.setToken(null);
        $location.path('/adminLogin');
    }
}
logoutController.$inject = ['$scope', '$location', 'factory'];
App.controller('logoutController', logoutController);