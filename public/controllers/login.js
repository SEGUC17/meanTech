const loginController = function ($scope, $location, factory, $log, $window) {
  $scope.companyForm = {};
    $scope.clientForm = {};

    $scope.companyLogin = function companyLogin() {



        if ($scope.companyForm != undefined) {
            factory.companyLogin($scope.companyForm)
             .success(function(data) {

             $window.alert('rfr');
            //   $log.info(JSON.stringify(data, null, 4));
            }).error(function(data) {
               $window.alert('rfr');
            });

        }

    };

    $scope.clientLogin = function clientLogin() {


        if ($scope.clientForm != undefined) {
          factory.clientLogin($scope.clientForm)

        .success(function(data) {
                $log.info(JSON.stringify(data, null, 4));

            }).error(function(data) {
                $log.error('error');
            });

        }

    };


}

loginController.$inject = ['$scope', '$location', 'factory', '$log', '$window'];
App.controller('loginController', loginController);
