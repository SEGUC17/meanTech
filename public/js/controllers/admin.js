const adminController = function ($scope, $location, factory) {
    $scope.adminForm = {};
    $scope.verifyForm = {};
    $scope.deleteForm = {};

    const app = this;

    $scope.adminRegister = function adminRegister() {
        factory.adminRegister($scope.adminForm)
        .then(function (data) {
            app.successMsg = "You will be now redirected to login.";
            $location.path('/adminLogin');
        }).catch(function (error) {
           app.errorMsg = "Something went wrong";
        });
    };

    $scope.unverifiedCompanies = function unverifiedCompanies() {
        factory.unverifiedCompanies().success(function (data) {
            alert("Here are all the unverfied Companies.");
        }).error(function (error) {
            alert(error.message);
        });
    };

    $scope.verifyCompanies = function verifyCompanies() {
        factory.verifyCompanies($scope.verifyForm).success(function (data) {
            alert("Company Verified.");
            $location.path('/unverifiedCompanies');
        }).error(function (error) {
            alert(error.message);
        });
    };

    $scope.deleteCompany = function deleteCompany() {
        factory.deleteCompany($scope.deleteForm).success(function (data) {
            alert("Company deleted.");
            $location.path('/viewCompanies');
        }).error(function (error) {
            alert(error.message);
        });
    };

    $scope.goVerify = function goVerify() {
        $location.path('/verifyCompanies');
    };

};



adminController.$inject = ['$scope', '$location', 'factory'];
App.controller('adminController', adminController);