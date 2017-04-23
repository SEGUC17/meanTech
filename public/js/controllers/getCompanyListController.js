const getCompanyListController = function ($scope, $location, factory) {

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
   
    factory.companyList()
        .then(function (response) {
            const company = response.data.data;
            $scope.companylist = company;
            console.log(response.data.data);
        })
        .catch(function (response) {
            alert(response.data.data.error);
        });
}

getCompanyListController.$inject = ['$scope', '$location', 'factory'];
App.controller('getCompanyListController', getCompanyListController);
