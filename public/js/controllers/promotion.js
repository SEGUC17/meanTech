const promotionController = function ($scope, $location, factory) {

  // --->> if the client or the company is not logged in this will redirect you to the homepage
  if (!factory.getToken()) {
    $location.path('/');
  } else {
    $scope.selectedPromotion = {};
    $scope.showTable = true;

    // --->> As a company i can view my promotions
    $scope.viewPromotions = function () {
      factory.viewPromotions().success(function (response) {
        $scope.sortType = 'content'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.searchFish = ''; // set the default search/filter term
        $scope.promotionslist = response.promotions.map(function (element) {
          element.expiry = new Date(element.expiry);
          return element;
        });
      })
        .error(function (response) {
          alert(response);
        });
    };
    $scope.viewPromotions();

    // --->> helper function to update promotion, setting the promotion to be updated to the promotion
    $scope.selectPromotionToBeUpdated = function (promotion) {
      $scope.selectedPromotion = promotion;
      $scope.showTable = false;
    };
    // --->> As a company i can update a promotion i previously posted
    $scope.updatePromotion = function () {
      factory.updatePromotion($scope.selectedPromotion)
        .success(function (response) {
          alert('Promotion updated successfully !');
          $scope.viewPromotions();
          $scope.showTable = true;
        })
        .error(function (response) {
          alert(response.error);
        });
    };

    // --->> As a company i can post a promotion
    $scope.promotionForm = {};
    $scope.postPromotion = function postPromotion() {
      factory.postPromotion($scope.promotionForm)
        .then(function (data) {
          alert("Promotion Successfully Posted !")
        }).catch(function (error) {
          alert(error)
        });
    };

    // --->> As a company i can delete a promotion i previously posted

    $scope.deletePromotion = function deletePromotion(id) {
      $scope.id = {
        id
      };
      factory.deletePromotion($scope.id)
        .success(function (data) {
          alert("Promotion deleted !");
          factory.viewPromotions().success(function (data) {
            $scope.promotionslist = data.promotions;
          });
        }).error(function (error) {

        });
    }

  }
};
promotionController.$inject = ['$scope', '$location', 'factory'];
App.controller('promotionController', promotionController);
