const loginController = function ($scope, $location, factory) {
    $scope.companyForm = {};
    $scope.clientForm = {};

    $scope.companyLogin = function companyLogin() {
        factory.companyLogin($scope.companyForm)
      .success(function (data) {
          factory.setToken(data.token);
          console.log(factory.getToken());
      }).error(function (error) {
          alert(error.message);
      });
    };

    $scope.clientLogin = function clientLogin() {
        factory.clientLogin($scope.clientForm)
      .success(function (data) {
          factory.setToken(data.token);
          console.log(factory.getToken());
      }).error(function (error) {
          alert(error.message);
      });
    };

    $scope.loginForm = {};

    $scope.adminLogin = function adminLogin() {
        factory.adminLogin($scope.loginForm).success(function (data) {
            alert("Welcome!");
            $location.path('/adminHome');
        }).error(function (error) {
            alert(error.message);
        });
    };
};


loginController.$inject = ['$scope', '$location', 'factory'];
App.controller('loginController', loginController);