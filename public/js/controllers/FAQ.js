const FAQController = function ($scope, $location, factory) {

    $scope.viewFAQs = function viewFAQs() {
        factory.viewFAQs().success(function (data) {
            alert("All FAQs are being viewed.");
        }).error(function (error) {
            alert(error.message);
        });
    };
};

FAQController.$inject = ['$scope', '$location', 'factory'];
App.controller('FAQController', FAQController);
