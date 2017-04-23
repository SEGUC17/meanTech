const adminController = function ($scope, $location, factory) {
    $scope.adminForm = {};
    $scope.verifyForm = {};
    $scope.deleteForm = {};

    

    $scope.adminRegister = function adminRegister() {
        app.errorMsg = false;
        factory.adminRegister($scope.adminForm)
            .then(function (data) {
                $location.path('/adminLogin');
            }).catch(function (error) {
                
            });
    };

    factory.unverifiedCompanies()
        .then(function (response) {
            $scope.uncompanies = response.data;
        })
        .catch(function (response) {

        });

    $scope.verifyCompanies = function unverifiedCompanies() {
        factory.verifyCompanies($scope.verifyForm).then(function (data) {
            alert("Company Verified.");
            $location.path('/unverifiedCompanies');
        }).catch(function (error) {

        });
    };

    $scope.deleteCompany = function deleteCompany() {
        factory.deleteCompany($scope.deleteForm).then(function (data) {
            $location.path('/viewCompanies');
        })
    };

    $scope.goVerify = function goVerify() {
        $location.path('/verifyCompanies');
    };

};



adminController.$inject = ['$scope', '$location', 'factory'];
App.controller('adminController', adminController);