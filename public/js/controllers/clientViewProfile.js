const viewProfileController = function ($scope, $location, factory) {
   

        factory.viewProfile()
            .success(function (data) {
                console.log("in clientcieprofile.js");
                console.log(data);
                            console.log("inisde the ctrl");


                $scope.profile = data.data;


            });
    };
    
    viewProfileController.$inject = ['$scope', '$location', 'factory'];
    App.controller('viewProfileController', viewProfileController);


