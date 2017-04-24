const getReviewsController = function ($scope, $location, factory) {
// company can view its own reviews
    factory.myReviews()
        .then(function (response) {
            const review = response.data.data;
            $scope.reviewList = review;
        })
        .catch(function (response) {
            alert(response.data.error);
        });
};

getReviewsController.$inject = ['$scope', '$location', 'factory'];
App.controller('getReviewsController', getReviewsController);
