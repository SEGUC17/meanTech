const updateProfileController = function ($scope, $location, factory) {

    $scope.clientUpdateProfileForm = {};

    $scope.clientUpdatePassword = function clientUpdatePassword(companyInfo) {
        $location.path("/clientUpdatePassword");
    }


    $scope.clientUpdateProfile = function clientUpdateProfile() {
        factory.clientUpdateProfile($scope.clientUpdateProfileForm)
            .success(function (data) {
                alert('successfully updated')
            }).error(function (error) {
                alert(error.message)
            });
    };
};
updateProfileController.$inject = ['$scope', '$location', 'factory'];
App.controller('updateProfileController', updateProfileController);



