const userViewAllPromotionsController = function ($scope, $location, factory) {
    $scope.viewPromotionsForm = {};

    $scope.userViewAllPromotions = function userViewAllPromotions() {

        factory.userViewAllPromotions() // there was $scope.viewPromotionsForm in paramater
      .success(function (data) {
          alert("You're viewing all the prmomotions"); // to be removed
      }).error(function (error) {
          alert(error.message);
      });

    //     factory.userViewAllPromotions().then((res)) => {
    //   const { data: { data: { collection: promotions}}} = res;
  };
};


userViewAllPromotionsController.$inject = ['$scope', '$location', 'factory'];
App.controller('userViewAllPromotionsController', userViewAllPromotionsController);
