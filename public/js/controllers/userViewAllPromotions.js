const userViewAllPromotionsController = function ($scope, $location, factory) {

    //to let a visitor and a client see all the promotions
    factory.userViewAllPromotions()
        .success(function (data) {

            //$scope.promotions = data.data;
            $scope.promotions = response.promotions.map(function (element) {
                element.date = new Date(element.date);
                return element;
            });
        })
};

userViewAllPromotionsController.$inject = ['$scope', '$location', 'factory'];
App.controller('userViewAllPromotionsController', userViewAllPromotionsController);
