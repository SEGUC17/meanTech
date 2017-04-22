const logoutController = function ($scope, $location, factory) {
    $scope.logout = function logout() {
        factory.setToken(null);
        $location.path('/');
        console.log(factory.getToken());
    }
}
logoutController.$inject = ['$scope', '$location', 'factory'];
App.controller('logoutController', logoutController);