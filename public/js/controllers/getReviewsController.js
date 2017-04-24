const getReviewsController = function ($scope, $location, factory) {

    factory.myReviews()
        .then(function (response) {
            const review = response.data.reviews[0];
            console.log(review);
            $scope.reviewList = review;
        })
        .catch(function (response) {
            alert(response.data.error);
        });
};

getReviewsController.$inject = ['$scope', '$location', 'factory'];
App.controller('getReviewsController', getReviewsController);
