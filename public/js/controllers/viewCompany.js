const adminViewCompanyController = function ($scope, $location, factory) {
    //views companies so that they can be deleted 
    factory.viewCompanies()
        .then(function (response) {
            $scope.companies = response.data.data;
        })
        .catch(function (response) {

        });
    
    //redirects from the page that views companies to a page to delete the companies
    $scope.goDelete = function goDelete() {
        $location.path('/deleteCompany');
    };
};

adminViewCompanyController.$inject = ['$scope', '$location', 'factory'];
App.controller('adminViewCompanyController', adminViewCompanyController);