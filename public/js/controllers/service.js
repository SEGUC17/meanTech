const serviceController = function ($scope, $location, factory) {

    factory.getAllServices().success(function(data) {
        $scope.allservices=data.data;
    });
}

serviceController.$inject = ['$scope', '$location', 'factory'];
App.controller('serviceController', serviceController);