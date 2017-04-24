//Company Profile for visitors/Clients
const visitCompanyPageController = function ($scope, $location, factory) {
    const comp = factory.getSelectedCompany();
    $scope.showReview = false;
  
    if (!factory.getToken()) {
        $scope.showReview = false;
    }
    else $scope.showReview = true;

    $scope.reviewPage = function reviewPage(companyInfo) {
                factory.setCompanyReview(companyInfo);
                $location.path('/pr');
    }

    factory.CompanyProfile(comp)
        .then(function (response) {
            const company = response.data.data;
            $scope.companyInfo = comp;
        })
        .catch(function (response) {
            alert(response.data.error);
        });
}

visitCompanyPageController.$inject = ['$scope', '$location', 'factory'];
App.controller('visitCompanyPageController', visitCompanyPageController);
