const updateProfileController = function ($scope, $location, factory) {
    $scope.clientUpdateProfileForm = {};
   
    $scope.clientUpdateProfile = function clientUpdateProfile() {
        factory.clientUpdateProfile($scope.clientUpdatePasswordForm)

            .success(function (data) {
                alert('Profile updated Successfully');
            }).error(function (error) {
                alert(error.message);
            });
    };
};
updateProfileController.$inject = ['$scope', '$location', 'factory'];
App.controller('updateProfileController', updateProfileController);
