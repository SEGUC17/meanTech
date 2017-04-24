const postReviewController = function ($scope, $location, factory) {
    $scope.reviewInfo = {};
    const company = factory.getCompanyReview();

    $scope.postReview = function postReview() {
        $scope.reviewInfo.companyID = company._id;

        factory.postReview($scope.reviewInfo)
            .success(function (data) {
                alert('Review successfully posted.');
            }).error(function (error) {
                alert(error.message);
            });
    };
};

postReviewController.$inject = ['$scope', '$location', 'factory'];
App.controller('postReviewController', postReviewController);
