const adminController = function ($scope, $location, factory) {
    $scope.adminForm = {};
    $scope.verifyForm = {};
    $scope.deleteForm = {};

    const app = this;

    $scope.adminRegister = function adminRegister() {
        app.errorMsg = false;
        factory.adminRegister($scope.adminForm)
            .then(function (data) {
                alert("you will now be redirected to login.")
                //app.successMsg = data.data.msg
                $location.path('/adminLogin');
            }).catch(function (error) {
                //app.errorMsg = data.data.msg
            });
    };

    factory.unverifiedCompanies()
        .then(function (response) {
            console.log('SUCCESS =>', response);
            // $scope.uncompanies = response.data;
        })
        .catch(function (response) {
            console.log('ERROR =>', response);
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
            alert("Company deleted.");
            $location.catch('/viewCompanies');
        }).error(function (error) {

        });
    };

    $scope.goVerify = function goVerify() {
        $location.path('/verifyCompanies');
    };

};



adminController.$inject = ['$scope', '$location', 'factory'];
App.controller('adminController', adminController);