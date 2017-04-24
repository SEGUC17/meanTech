const questionController = function ($scope, $location, factory) {
    $scope.questionAnswerForm = {};
    $scope.questionAnswerForm._id = factory.getQuestionId();
    $scope.answerQuestion = function answerQuestion() {
        factory.answerQuestion($scope.questionAnswerForm)
            .success(function (response) {
                alert('Answer successfully posted.');
                $location.path('/FAQView');
            }).error(function (response) {
                alert('Answer posting unsuccessful');
            });
    };
};

questionController.$inject = ['$scope', '$location', 'factory'];
App.controller('questionController', questionController);