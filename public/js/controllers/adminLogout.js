const logoutController = function ($scope, $location, factory) {
    //admin logs out of the admin dashboard
    $scope.logout = function logout() {
        factory.setToken(null);
        $location.path('/adminLogin');
    }
}
logoutController.$inject = ['$scope', '$location', 'factory'];
App.controller('logoutController', logoutController);