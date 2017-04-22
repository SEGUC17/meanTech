const viewProfileController = function ($scope, $location, factory) {


    factory.viewProfile()
        .then(function (data) {
            // console.log("in clientcieprofile.js");
            // console.log("in clientcieprofile.00js");
            // console.log(data.data[0]);
            // console.log("inisde the ctrl");
            // console.log(data.data.data[0])
            $scope.profile = data.data.data[0];

            // DEMO, REMOVE
            $scope.profile.favCompanies = ['Google', 'Microsoft'];
            // ^ DEMO, REMOVE

            console.log(data.data.data[0]);
        })
        .catch(function (error) {
            console.log(error);
        });
};

viewProfileController.$inject = ['$scope', '$location', 'factory'];
App.controller('viewProfileController', viewProfileController);


