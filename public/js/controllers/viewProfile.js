const viewProfileController = function ($scope, $location, factory) {

  $scope.viewProfile = function viewProfile() {

    factory.viewProfile()
      .success(function (response) {

        $scope.prof = response;
        factory.setToken(data.token);
        console.log(factory.getToken());
      }).error(function (error) {
        alert(error.message);
      });
  };
  
  viewProfileController.$inject = ['$scope', '$location', 'factory'];
  App.controller('viewProfileController', viewProfileController);

