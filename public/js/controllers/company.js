const companyController = function ($scope, $location, factory, $log) {

    $scope.heading = "HI";

    $scope.formData = {};


    $scope.createCompany = function createCompany() {


        if ($scope.formData != undefined) {
      factory.companySubscription($scope.formData)
          .success(function(data) {
                alert("success")
            }).error(function(data) {
                $log.error('error');
            });
          

        }
    }

}

companyController.$inject = ['$scope', '$location', 'factory', '$log'];
App.controller('companyController', companyController);
