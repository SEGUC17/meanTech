const updatePasswordController = function ($scope, $location, factory) {
    $scope.clientUpdatePasswordForm = {};
    $scope.companyUpdatePasswordForm = {};
    $scope.adminUpdatePasswordForm={};


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
