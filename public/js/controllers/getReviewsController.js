const getReviewsController = function ($scope, $location, factory) {

    factory.myReviews()
        .then(function (response) {
            const reviews = response.data.reviews[0];
            $scope.reviewList = reviews;
        })
        .catch(function (response) {
            alert(response.data.error);
        });
};

getReviewsController.$inject = ['$scope', '$location', 'factory'];
App.controller('getReviewsController', getReviewsController);
