const FAQController = function ($scope, $location, factory) {

        //views questions so that they can be viewed
        factory.viewFAQs()
                .then(function (response) {
                        $scope.faqs = response.data.data;
                })
                .catch(function (response) {
                        $scope.errorMsg = "something went wrong :|";
                });

        //retrieves the id of a question so that it can be answered
        $scope.questionId = function questionId(id) {
                factory.setQuestionId(id);
                $location.path('/answerQuestion');
        };
};

FAQController.$inject = ['$scope', '$location', 'factory'];
App.controller('FAQController', FAQController);