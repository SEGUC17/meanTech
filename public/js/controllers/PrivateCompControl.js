const PrivateCompControl = function ($scope, $location, factory) {

    factory.MyCompanyProfile()
        .success(function (data) {

            $scope.companyInfo = data.data;
            console.log($scope.companyInfo);
  
        });
};
PrivateCompControl.$inject = ['$scope', '$location', 'factory'];
App.controller('PrivateCompControl', PrivateCompControl);
