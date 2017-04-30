const adminController = function ($scope, $location, factory, $timeout, $route) {
    $scope.adminForm = {};
    $scope.verifyForm = {};
    $scope.deleteForm = {};


    //User registers as admin tp login
    $scope.adminRegister = function adminRegister() {
        factory.adminRegister($scope.adminForm)
            .then(function (data) {
                $scope.errorMsg = false;
                $scope.successMsg = data.data.message + "...redirecting";
                $timeout(function () {
                    $location.path('/adminHome');
                    $route.reload();
                }, 1000);
            }).catch(function (error) {
                $scope.errorMsg = error.data.message;

            });
    };

    //Shows unverified companies so that they can be verified
    factory.unverifiedCompanies()
        .then(function (response) {
            $scope.uncompanies = response.data.data;
        }).catch(function (error) {
            $scope.errorMsg = "something went wrong :|";
        });


    //gives the admin the ability to verify companies
    $scope.verifyCompanies = function unverifiedCompanies() {
        factory.verifyCompanies($scope.verifyForm).then(function (data) {
            $scope.errorMsg = false;
            $scope.successMsg = data.data.msg + "...redirecting";
            $timeout(function () {
                $location.path('/unverifiedCompanies');
                $route.reload();
            }, 1000);
        }).catch(function (error) {
            $scope.errorMsg = error.data.msg;
        });
    };

    //gives the admin the ability to delete companies
    $scope.deleteCompany = function deleteCompany() {
        factory.deleteCompany($scope.deleteForm).then(function (data) {
            console.log(data)
            $scope.errorMsg = false;
            $scope.successMsg = data.data + "...redirecting";
            $timeout(function () {
                $location.path('/viewCompanies');
                $route.reload();
            }, 1000);

        }).catch(function (error) {
            console.log(error)
            $scope.errorMsg = error.data;
        })
    };

    //redirects from a page that views unverified companies to a page where you can verify them
    $scope.goVerify = function goVerify() {
        $location.path('/verifyCompanies');
    };

};

adminController.$inject = ['$scope', '$location', 'factory', '$timeout', '$route'];
App.controller('adminController', adminController);