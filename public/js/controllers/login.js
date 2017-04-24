const loginController = function ($scope, $location, factory) {
    factory.clearToken();

    $scope.companyForm = {};
    $scope.clientForm = {};

    $scope.isClientFormValid = function() {
      return $scope.clientForm.username && $scope.clientForm.password;
    };

    $scope.isCompanyFormValid = function() {
      return $scope.companyForm.username && $scope.companyForm.password;
    };

    $scope.companyLogin = function companyLogin() {
        factory.companyLogin($scope.companyForm)
            .success(function (data) {
                factory.setToken(data.token);
                factory.setUsername($scope.companyForm.username);
                factory.setBusinessUser();
                $location.path('/companyProfile');
            }).error(function (error) {
                alert(error.message);
            });
    };

    $scope.clientLogin = function clientLogin() {
        factory.clientLogin($scope.clientForm)
            .success(function (data) {
                factory.setToken(data.token);
                factory.setUsername($scope.clientForm.username);
                factory.setClientUser();
                $location.path('/clientViewProfile');
            }).error(function (error) {
                alert(error.message);
            });
    };
};

loginController.$inject = ['$scope', '$location', 'factory'];
App.controller('loginController', loginController);
