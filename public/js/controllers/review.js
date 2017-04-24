const reviewController = function ($scope, $location, factory) {
   
    const company = factory.getCompanyReview();
    factory.viewRatings(company).success(function (data) {
        console.log('it gets to the review controller');
        console.log(data);
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.searchFish = ''; // set the default search/filter term
        $scope.ratings = data.data;
    });
};


reviewController.$inject = ['$scope', '$location', 'factory'];
App.controller('reviewController', reviewController);
