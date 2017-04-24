const getCompanyListController = function ($scope, $location, factory) {
// visits the profile of the company selected from the list
$scope.visitProfile = function visitProfile(company){
    factory.CompanyProfile()
        .then(function (response) {
            factory.setSelectedCompany(company);
            $location.path('/CProfile')
           
        })
        .catch(function (response) {
            alert(response.data.error);
        });
    }
//    gets a list of available companies to be viewed by anyone 
    factory.companyList()
        .then(function (response) {
            const company = response.data.data;
            $scope.companylist = company;
        })
        .catch(function (response) {
            alert(response.data.data.error);
        });
}

getCompanyListController.$inject = ['$scope', '$location', 'factory'];
App.controller('getCompanyListController', getCompanyListController);
