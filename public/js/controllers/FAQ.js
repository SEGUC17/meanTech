const FAQController = function ($scope, $location, factory) {

     factory.viewFAQs()
        .then(function (response) {
           $scope.faqs = response.data.data;
        })
        .catch(function (response) {

        });



};

FAQController.$inject = ['$scope', '$location', 'factory'];
App.controller('FAQController', FAQController);