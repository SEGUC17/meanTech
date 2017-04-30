const reviewController = function ($scope, $location, factory) {
    if (!factory.getToken()) {
        $location.path('/');
    } else {
        const company = factory.getCompanyReview();
        // function that views the reviews of the company to anyone
        factory.viewRatings(company).success(function (data) {
            $scope.sortType = 'name'; // set the default sort type
            $scope.sortReverse = false; // set the default sort order
            $scope.searchFish = ''; // set the default search/filter term
            $scope.ratings = data.data;
        });
        //------>changes the date as string coming from the DB to  type date<------
        $scope.constructDate = function (dateString) {
            return new Date(dateString);
        };
    }
};


reviewController.$inject = ['$scope', '$location', 'factory'];
App.controller('reviewController', reviewController);