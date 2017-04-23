const askQuestionController = function ($scope, $location, factory) {
    $scope.question = {};
    $scope.askQuestion = function askQuestion() {
        factory.askQuestion($scope.question)
            .success(function (data) {
                alert('Question successfully posted.');
            }).error(function (error) {
                console.log(error);
                alert(error);
            });
    };
};

askQuestionController.$inject = ['$scope', '$location', 'factory'];
App.controller('askQuestionController', askQuestionController);
