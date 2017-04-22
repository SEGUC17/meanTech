const postReviewController = function ($scope, $location, factory) {
    $scope.reviewInfo = {};

    $scope.postReview = function postReview() {
        factory.postReview($scope.reviewInfo)
            .success(function (data) {
                alert('Review successfully posted.');
            }).error(function (error) {
                alert(error.message);
            });
    };
}
postReviewController.$inject = ['$scope', '$location', 'factory'];
App.controller('postReviewController', postReviewController);
