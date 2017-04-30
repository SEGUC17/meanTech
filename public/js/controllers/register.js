const registerController = function ($scope, $location, factory) {
    $scope.clientInfo = {};

    // Client can register his information
    $scope.register = function register() {
        factory.register($scope.clientInfo)
            .success(function (response) {
                alert('Successfully Registered!');
                $location.path('/');
            }).error(function (error) {
                alert(error.message);
            });
    };
};

registerController.$inject = ['$scope', '$location', 'factory'];
App.controller('registerController', registerController);