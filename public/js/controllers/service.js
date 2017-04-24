  const serviceController = function ($scope, $location, factory) {
    if (!factory.getToken()) {
      $location.path('/');
    } else {
      $scope.selectedService = {};
      $scope.showTable = true;
      $scope.serviceForm = {};

      $scope.createService = function createService() {
        factory.createService($scope.serviceForm)
          .success(function (response) {
            alert("Service Successfully created!")
          }).error(function (response) {
            alert(response)
          });
      };

      $scope.deleteService = function deleteService(id) {
        $scope.id = {
          id
        };
        factory.deleteService($scope.id)
          .success(function (response) {
            alert("Service Successfully delted!");
            $scope.getCompanyServices();
          }).error(function (response) {
            alert(response);
          });
      };

      $scope.selectServiceToBeUpdated = function (service) {
        $scope.selectedService = service;
        $scope.showTable = false;
      };

      $scope.updateService = function () {
        factory.updateService($scope.selectedService)
          .success(function (response) {
            alert('Service updated successfully');
            $scope.getCompanyServices();
            $scope.showTable = true;
          })
          .error(function (response) {
            alert(response.error);
          });
      };


      $scope.getCompanyServices = function () {
        factory.viewServices().success(function (response) {
            $scope.sortType = 'name'; // set the default sort type
            $scope.sortReverse = false; // set the default sort order
            $scope.searchFish = ''; // set the default search/filter term
            $scope.services = response.services;
          })
          .error(function (response) {
            alert(response);
          });
      };

      $scope.getCompanyServices();

    }
  }
  serviceController.$inject = ['$scope', '$location', 'factory'];
  App.controller('serviceController', serviceController);