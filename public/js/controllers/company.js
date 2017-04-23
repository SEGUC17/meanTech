const companyController = function ($scope, $location, factory) {

    $scope.heading = "HI";

    $scope.formData = {};


    $scope.createCompany = function createCompany() {



      factory.companySubscription($scope.formData)
          .success(function(data) {
                alert("Successfulley Registered! Please wait for an email on further details!")
            }).error(function(error) {
              alert(error.message)
            });



    }

}

companyController.$inject = ['$scope', '$location', 'factory'];
App.controller('companyController', companyController);
