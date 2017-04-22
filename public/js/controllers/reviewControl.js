const reviewControl = function ($scope, $location, factory) {
    $scope.viewMyReviews = function viewMyReviews() {
        factory.myReviews()
        .success(function(){
                alert("Reviews shown")
            }).error(function(error){
                alert(error.messaage)
            });
    };
};

reviewControl.$inject = ['$scope', '$location', 'factory'];
App.controller('reviewControl', reviewControl);
