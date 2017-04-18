const loginController = function ($scope, $location, factory, $log) {
  $scope.companyForm = {};
    $scope.clientForm = {};

    $scope.companyLogin = function companyLogin() {


        if ($scope.companyForm != undefined) {
            factory.companyLogin($scope.companyForm)
             .success(function(data) {
                /* data1 = JSON.stringify(data, null, 4);
                if (data1[0].token == undefined){
                  alert(data1[0].message);
                }else {
                  alert(data1[0].token)
                }*/

                $log.info(JSON.stringify(data, null, 4));
            }).error(function(data) {
                $log.error('error');
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

loginController.$inject = ['$scope', '$location', 'factory', '$log'];
App.controller('loginController', loginController);
