const askQuestionController = function ($scope, $location, factory) {
    $scope.question = {};
    $scope.askQuestion = function askQuestion() {
        factory.askQuestion($scope.question)
            .success(function (response) {
                alert('Question successfully posted.');
            }).error(function (response) {
              
                alert("Question Posting Unsuccessful");
            });
    };
};

askQuestionController.$inject = ['$scope', '$location', 'factory'];
App.controller('askQuestionController', askQuestionController);
