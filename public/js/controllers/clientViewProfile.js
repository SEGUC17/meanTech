const viewProfileController = function ($scope, $location, factory) {


    factory.viewProfile()
        .then(function (data) {
            $scope.profile = data.data.data[0];
            //$scope.companyName = data.data.data.[];
            console.log(data.data.data[0]);
        })
        .catch(function (error) {
            alert('Error');
        });
};

viewProfileController.$inject = ['$scope', '$location', 'factory'];
App.controller('viewProfileController', viewProfileController);


