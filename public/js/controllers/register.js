const registerController = function ($scope, $location, factory) {
    $scope.clientInfo = {};

    $scope.register = function register() {
        factory.register($scope.clientInfo)
            .success(function (data) {
                alert('Successfully Registered! Please wait for an email on further details!');
            }).error(function (error) {
                alert(error.message);
            });
    };
};

registerController.$inject = ['$scope', '$location', 'factory'];
App.controller('registerController', registerController);