const userViewAllPromotionsController = function ($scope, $location, factory) {
    $scope.constructDate = function (dateString) {
        return new Date(dateString);
    };
    //to let a visitor and a client see all the promotions
    factory.userViewAllPromotions()
        .success(function (data) {

            $scope.promotions = data.data;
        })
};

userViewAllPromotionsController.$inject = ['$scope', '$location', 'factory'];
App.controller('userViewAllPromotionsController', userViewAllPromotionsController);
