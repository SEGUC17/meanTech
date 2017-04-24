const adminController = function ($scope, $location, factory) {
        $scope.adminForm = {};
        $scope.verifyForm = {};
        $scope.deleteForm = {};


        //User registers as admin tp login
        $scope.adminRegister = function adminRegister() {
            factory.adminRegister($scope.adminForm)
                .then(function (data) {
                    $location.path('/adminLogin');
                }).catch(function (error) {

                });
        };

        //Shows unverified companies so that they can be verified
        factory.unverifiedCompanies()
            .then(function (response) {
               $scope.uncompanies = response.data.data;
            })
          

        //gives the admin the ability to verify companies
        $scope.verifyCompanies = function unverifiedCompanies() {
            factory.verifyCompanies($scope.verifyForm).then(function (data) {
                alert("Company Verified.");
                $location.path('/unverifiedCompanies');
            }).catch(function (error) {

            });
        };

        //gives the admin the ability to delete companies
        $scope.deleteCompany = function deleteCompany() {
            factory.deleteCompany($scope.deleteForm).then(function (data) {
                $location.path('/viewCompanies');
            })
        };

        //redirects from a page that views unverified companies to a page where you can verify them
        $scope.goVerify = function goVerify() {
            $location.path('/verifyCompanies');
        };

    };



adminController.$inject = ['$scope', '$location', 'factory'];
App.controller('adminController', adminController);