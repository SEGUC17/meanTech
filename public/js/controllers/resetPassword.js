const resetPasswordController = function ($scope, $location, factory) {
    $scope.clientresetPasswordForm = {};
    $scope.companyresetPasswordForm = {};


    $scope.clientresetPassword = function clientresetPassword() {
        factory.clientresetPassword($scope.clientresetPasswordForm)

            .success(function (data) {
                alert('Password updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };

    $scope.companyresetPassword = function companyresetPassword() {
        factory.companyresetPassword($scope.companyresetPasswordForm)

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
