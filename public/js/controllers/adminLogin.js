const adminLoginController = function ($scope, $location, factory) {
    //Admin logs in to preform the functions
    $scope.adminLogin = function adminLogin() {
        factory.adminLogin($scope.loginForm).then(function (data) {
            if (data.data.success == true && data.data.token != null) {
                factory.setToken(data.data.token);
                factory.setUsername($scope.loginForm.username);
                factory.setAdminUser();
                factory.setClientUserFalse();
                factory.setBusinessUserFalse();
                $location.path('/adminHome');
            } else {
                alert(data.data.msg);
            }
        })
    };
    factory.logout()
        .then(function (response) {
            factory.setBusinessUserFalse();
            factory.setAdminUserFalse();
            factory.setClientUserFalse();
            const x = null;
            factory.setToken(x);
            // $location.path('/');
        }).catch(function (error) {
            alert(error.message);
        });

};

adminLoginController.$inject = ['$scope', '$location', 'factory'];
App.controller('adminLoginController', adminLoginController);