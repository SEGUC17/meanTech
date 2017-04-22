const viewCompanyController = function ($scope, $location, factory) {

    factory.MyCompanyProfile()
        .then(function (response) {
            const company = response.data.company[0];
            $scope.companyInfo = company;
        })
        .catch(function (response) {
            alert(response.data.error);
        });

}

viewCompanyController.$inject = ['$scope', '$location', 'factory'];
App.controller('viewCompanyController', viewCompanyController);
