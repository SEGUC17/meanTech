const resetPasswordController = function ($scope, $location, factory) {
    $scope.clientResetPasswordForm = {};
    $scope.companyResetPasswordForm = {};


    $scope.clientResetPassword = function clientResetPassword() {
        factory.clientResetPassword($scope.clientResetPasswordForm)

            .success(function (data) {
                alert('Password updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };

    $scope.companyResetPassword = function companyResetPassword() {
        factory.companyResetPassword($scope.companyResetPasswordForm)

            .success(function (data) {
                alert('Password updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };

    // TODO admin reset password 
};

resetPasswordController.$inject = ['$scope', '$location', 'factory'];
App.controller('resetPasswordController', resetPasswordController);
