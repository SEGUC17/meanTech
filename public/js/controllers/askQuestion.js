const askQuestionController = function ($scope, $location, factory) {
    $scope.question = {};

    // Client can ask a question to the platform
    $scope.askQuestion = function askQuestion() {
        factory.askQuestion($scope.question)
            .success(function (response) {
                alert('Question successfully posted.');
                $location.path('/clientViewProfile');
            }).error(function (response) {
                alert('Question posting unsuccessful');
            });
    };
};

askQuestionController.$inject = ['$scope', '$location', 'factory'];
App.controller('askQuestionController', askQuestionController);