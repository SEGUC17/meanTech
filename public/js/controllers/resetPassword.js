const resetPasswordController = function ($scope, $location, factory) {
    $scope.clientResetPasswordForm = {};
    $scope.companyResetPasswordForm = {};
    $scope.adminResetPasswordForm = {};


//to let the client reset his password when fogotten
    $scope.clientResetPassword = function clientResetPassword() {
        factory.clientResetPassword($scope.clientResetPasswordForm)

            .success(function (data) {
                alert('Password updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };

//to let the company reset his password when fogotten

    $scope.companyResetPassword = function companyResetPassword() {
        factory.companyResetPassword($scope.companyResetPasswordForm)

            .success(function (data) {
                alert('Password updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };

//to let the admin reset his password when fogotten

    $scope.adminResetPassword = function adminResetPassword() {
        factory.adminResetPassword($scope.adminResetPasswordForm)

            .success(function (data) {
                alert('Password updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };
};

resetPasswordController.$inject = ['$scope', '$location', 'factory'];
App.controller('resetPasswordController', resetPasswordController);
