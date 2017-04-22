const questionController = function ($scope, $location, factory) {
    $scope.answers = {};
    $scope.answers._id = '58fb5365e9a7833523b82f23' ;
    $scope.answerQuestion = function answerQuestion() {
        factory.answerQuestion($scope.answers)
            .success(function (data) {
                alert('Answer successfully posted.');
            }).error(function (error) {
            console.log(error);
                alert(error);
            });
    };
};

questionController.$inject = ['$scope', '$location', 'factory'];
App.controller('questionController', questionController);
