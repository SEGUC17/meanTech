const serviceController = function ($scope, $location, factory) {
  if (!factory.getToken() || !factory.isBusinessUser()) {
    $location.path('/');
  } else {
    $scope.serviceForm = {};

    $scope.createService = function () {
      factory.createService($scope.serviceForm)
        .success(function (data) {
          alert("Service Successfully created!")
        }).error(function (error) {

          alert(error.message)

        });
    };

    $scope.updateService = function updateService(service) {
      $http.post('http://localhost:8080/updateService', JSON.stringify({ Id: service._Id, name: service.name, availableBookings: service.availableBookings, duration: service.duration, description: service.description, price: service.price, pictureURL: service.pictureURL }), {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      }).success(function (data) {
        $location.path("/viewServices");
      }).error(function (err) {
        alert(err.Message);
      });
    };

    $scope.deleteService = function deleteService(id) {
      $scope.id = {
        id
      };
      factory.deleteService($scope.id)
        .success(function (data) {
          console.log("it gets to the CTRL of delete service");
          alert("Service Successfully delted!");

          factory.viewServices().success(function (data) {
            $scope.services = data.services;
          });
        }).error(function (error) {
          alert(error.message);
        });
    };


    factory.viewServices().success(function (data) {
      console.log(data);
      $scope.services = data.services;
    })
  }
}

serviceController.$inject = ['$scope', '$location', 'factory'];
App.controller('serviceController', serviceController);