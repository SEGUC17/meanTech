const compControl2 = function ($scope, $location, factory) {

    //$scope.id = { "_id": "58fb40303cd3fd347cb0adec" };
    factory.MyCompanyProfile()
        .success(function (data) {
            // console.log($scope.id);
            console.log(data);
            $scope.company = data.data;
            console.log( $scope.company);
            // alert("Company displayed");
            
        });
};
compControl2.$inject = ['$scope', '$location', 'factory'];
App.controller('compControl2', compControl2);
