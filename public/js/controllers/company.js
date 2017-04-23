const companyController = function ($scope, $location, factory) {

    factory.viewCompanies()
        .then(function (response) {
            console.log('SUCCESS =>', response);
            // $scope.uncompanies = response.data;
        })
        .catch(function (response) {
            console.log('ERROR =>', response);
        });

    $scope.goDelete = function goDelete() {
        $location.path('#/deleteCompany');
    };
};

companyController.$inject = ['$scope', '$location', 'factory'];
App.controller('companyController', companyController);