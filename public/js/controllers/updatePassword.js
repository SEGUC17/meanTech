const updatePasswordController = function ($scope, $location, factory) {
    $scope.clientUpdatePasswordForm = {};
    $scope.companyUpdatePasswordForm = {};


    $scope.clientUpdatePassword = function clientUpdatePassword() {
        factory.clientUpdatePassword($scope.clientUpdatePasswordForm)

            .success(function (data) {
                alert('Password Updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };

    $scope.companyUpdatePassword = function companyUpdatePassword() {
        factory.companyUpdatePassword($scope.companyUpdatePasswordForm)

            .success(function (data) {
                alert('Password Updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };

    // TODO admin update password 
};

updatePasswordController.$inject = ['$scope', '$location', 'factory'];
App.controller('updatePasswordController', updatePasswordController);
