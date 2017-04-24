const promotionController = function ($scope, $location, factory) {
  if (!factory.getToken() || !factory.isBusinessUser()) {
    $location.path('/');
  } else {

    $scope.promotionForm = {};

    $scope.postPromotion = function postPromotion() {
      factory.postPromotion($scope.promotionForm)
        .then(function (data) {
          alert("Promotion Successfully Posted!")
        }).catch(function (error) {
          alert(error)

        });
    };


    // viewing the promotions


    factory.viewPromotions().success(function (data) {
      console.log("it gets to the frontend controller");
      console.log(data);

      $scope.sortType = 'content'; // set the default sort type
      $scope.sortReverse = false; // set the default sort order
      $scope.searchFish = ''; // set the default search/filter term
      $scope.promotionslist = data.promotions;
      console.log("after scope data");

    });


    // deleting the promotion


    $scope.deletePromotion = function deletePromotion(id) {

      console.log(id);
      $scope.id = {
        id
      };

      factory.deletePromotion($scope.id)
        .success(function (data) {
          console.log("it gets to the CTRL of delete promotion frontend");

          alert("Promotion deleted!");

          factory.viewPromotions().success(function (data) {
            console.log("it gets to the frontend controller");
            console.log(data);
            $scope.promotionslist = data.promotions;
            console.log("after scope data");

          });

        }).error(function (error) {

          console.log(error);

        });




    }
  }
}

promotionController.$inject = ['$scope', '$location', 'factory'];
App.controller('promotionController', promotionController);
