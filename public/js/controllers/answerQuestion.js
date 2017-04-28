const answerQuestionController = function ($scope, $location, factory) {
    $scope.questionAnswerForm = {};
    $scope.questionAnswerForm._id = factory.getQuestionId();
   
   // Admin can answer clients' questions
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

answerQuestionController.$inject = ['$scope', '$location', 'factory'];
App.controller('answerQuestionController', answerQuestionController);