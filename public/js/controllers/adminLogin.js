const loginController = function ($scope, $location, factory) {
    $scope.loginForm = {};

    $scope.adminLogin = function adminLogin() {
        factory.adminLogin($scope.loginForm).then(function (data) {
            alert("Welcome!");
            factory.setToken(data.data.token);
            $location.path('/adminHome');
        }).catch(function (error) {
            
        });
    };
};

loginController.$inject = ['$scope', '$location', 'factory'];
App.controller('loginController', loginController);
