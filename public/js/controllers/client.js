App.controller('clientController', ['$scope', function($scope) {
      $scope.favCompanies;
      $scope.compID;
      $scope.submit = function() {
        if ($scope.compID) {
          $scope.favCompanies.push(this.compID);
        }
      };
    }]);