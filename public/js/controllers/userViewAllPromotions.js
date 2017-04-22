const userViewAllPromotionsController = function ($scope, $location, factory) {


    factory.userViewAllPromotions() // there was $scope.viewPromotionsForm in paramater
        .success(function (data) {
            console.log("in.js");
            $scope.promotions = data.data;
        })

    //     factory.userViewAllPromotions().then((res)) => {
    //   const { data: { data: { collection: promotions}}} = res;
};

userViewAllPromotionsController.$inject = ['$scope', '$location', 'factory'];
App.controller('userViewAllPromotionsController', userViewAllPromotionsController);
