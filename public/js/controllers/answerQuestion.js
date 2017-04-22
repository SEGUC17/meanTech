const questionController = function ($scope, $location, factory) {
    $scope.answers = {};
    $scope.answers._id= { "_id" : "58fb5365e9a7833523b82f23" };
    $scope.answerQuestion = function answerQuestion() {
        factory.answerQuestion($scope.answers)
            .success(function (data) {
                alert('Successfully Registered! Please wait for an email on further details!');
            }).error(function (error) {
                alert(error.message);
            });
    };
};

questionController.$inject = ['$scope', '$location', 'factory'];
App.controller('questionController', questionController);
