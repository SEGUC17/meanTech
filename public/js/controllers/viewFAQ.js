const FAQController = function ($scope, $location, factory) {
    factory.viewFAQs()
        .then(function (response) {
            $scope.faqs = response.data.data;
        })
        .catch(function (response) {

        });

    $scope.questionId = function questionId(id) {
        $scope.id = {
            id,
        };
        $location.path('/faqa');
    };
};

FAQController.$inject = ['$scope', '$location', 'factory'];
App.controller('FAQController', FAQController);