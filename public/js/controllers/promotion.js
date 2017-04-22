const promotionController = function ($scope, $location, factory) {
    console.log('PROMOTION CONTROLLER INVOKED');

    $scope.promotionForm = {};

    $scope.postPromotion = function postPromotion() {
      factory.postPromotion($scope.promotionForm)
        .then(function (data) {
           alert("Promotion Successfully Posted!")
        }).catch(function (error) {
           alert(error)

        });
    };

  }

  promotionController.$inject = ['$scope', '$location', 'factory'];
  App.controller('promotionController', promotionController);
