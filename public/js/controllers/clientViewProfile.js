const viewProfileController = function ($scope, $location, factory) {


    factory.viewProfile()
        .then(function (data) {
            $scope.profile = data.data.data[0];

            console.log(data.data.data[0]);
        })
        .catch(function (error) {
            console.log(error);
        });
};

viewProfileController.$inject = ['$scope', '$location', 'factory'];
App.controller('viewProfileController', viewProfileController);


