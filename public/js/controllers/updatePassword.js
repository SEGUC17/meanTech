const updatePasswordController = function ($scope, $location, factory) {
    $scope.clientUpdatePasswordForm = {};
    $scope.companyUpdatePasswordForm = {};
    $scope.adminUpdatePasswordForm={};

//to let the client update his password 
    $scope.clientUpdatePassword = function clientUpdatePassword() {
        factory.clientUpdatePassword($scope.clientUpdatePasswordForm)

            .success(function (data) {
                alert('Password Updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };

//to let the company update its password
    $scope.companyUpdatePassword = function companyUpdatePassword() {
        factory.companyUpdatePassword($scope.companyUpdatePasswordForm)

            .success(function (data) {
                alert('Password Updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };

    // to let the admin update his password 
        $scope.adminUpdatePassword = function adminUpdatePassword() {
        factory.adminUpdatePassword($scope.adminUpdatePasswordForm)

            .success(function (data) {
                alert('Password Updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };
};

updatePasswordController.$inject = ['$scope', '$location', 'factory'];
App.controller('updatePasswordController', updatePasswordController);
