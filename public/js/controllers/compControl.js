const compControl = function ($scope, $location, factory) {

    $scope.id = { "_id": "58fb40303cd3fd347cb0adec" };
    factory.companyProfile($scope.id)
        .success(function (data) {
            // console.log($scope.id);
            console.log(data);

            $scope.companyInfo = data.data;
            // alert("Company displayed");
            
        });
};
compControl.$inject = ['$scope', '$location', 'factory'];
App.controller('compControl', compControl);
