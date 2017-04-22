const loginController = function ($scope, $location, factory) {
    $scope.loginForm = {};

    $scope.adminLogin = function adminLogin() {
        factory.adminLogin($scope.loginForm).success(function (data) {
            alert("Welcome!");
            $location.path('/adminHome');
        }).error(function (error) {
            alert(error.message);
        });
    };
};

loginController.$inject = ['$scope', '$location', 'factory'];
App.controller('loginController', loginController);
