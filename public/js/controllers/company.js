const companyController = function ($scope, $location, factory) {

    factory.viewCompanies()
        .then(function (response) {
             $scope.companies = response.data;
        })
        .catch(function (response) {
           
        });

    $scope.goDelete = function goDelete() {
        $location.path('#/deleteCompany');
    };
};

companyController.$inject = ['$scope', '$location', 'factory'];
App.controller('companyController', companyController);