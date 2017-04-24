const viewServiceController = function ($scope, $location, factory) {

    factory.getAllServices().success(function(data) {
        $scope.allservices=data.data;
    });
}

viewServiceController.$inject = ['$scope', '$location', 'factory'];
App.controller('viewServiceController', viewServiceController);