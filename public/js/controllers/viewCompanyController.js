//Company profile for Company
const viewCompanyController = function ($scope, $location, factory) {
// function that redirects a company to its reviews page
  $scope.MyReviewPage = function MyReviewPage(companyInfo){
        $location.path("/ViewReviews");
  }
    $scope.updatePassword = function updatePassword(companyInfo){
        $location.path("/companyUpdatePassword");
  }
// function that retrieves the information for the company profile
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
