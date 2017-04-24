const loginController = function ($scope, $location, factory) {
    //Admin logs in to preform the functions
    $scope.adminLogin = function adminLogin() {
        factory.adminLogin($scope.loginForm).then(function (data) {
            if (data.data.success == true && data.data.token != null) {
                factory.setToken(data.data.token);
                $location.path('/');
            } else { 
                alert(data.data.msg);
            }
        })
    };
};

loginController.$inject = ['$scope', '$location', 'factory'];
App.controller('loginController', loginController);