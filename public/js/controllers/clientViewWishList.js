const clientViewWishLitController = function ($scope, $location, factory) {

//to let a visitor and a client see all the promotions
    factory.clientViewWishLit()
        .success(function (data) {
            $scope.promotions = data.data;
        })
};

clientViewWishLitController.$inject = ['$scope', '$location', 'factory'];
App.controller('clientViewWishLitController', clientViewWishLitController);
