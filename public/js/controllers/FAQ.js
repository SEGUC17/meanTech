const FAQController = function ($scope, $location, factory) {

    $scope.viewFAQs = function viewFAQs() {
        factory.viewFAQs().then(function (data) {
            $scope.faqs = data.data
        })
    }; 
};

FAQController.$inject = ['$scope', '$location', 'factory'];
App.controller('FAQController', FAQController);
