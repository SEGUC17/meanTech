const companyController = function ($scope, $location, factory) {

    $scope.viewCompanies = function viewCompanies() {
        factory.viewCompanies().success(function (data) {
            alert("All companies are being viewed.");
        }).error(function (error) {
            alert(error.message);
        });
    };

    $scope.goDelete = function goDelete() {
        $location.path('#/deleteCompany');
    };
};

companyController.$inject = ['$scope', '$location', 'factory'];
App.controller('companyController', companyController);