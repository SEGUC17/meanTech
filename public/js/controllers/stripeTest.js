const stripeController = function($scope, $location, factory, stripe, $http) {
 $scope.Info = {};
var amount1 = factory.getSelectedPurchase().price;
    $scope.payment = {
        card: {
            number: null,
            cvc: null,
            exp_month: null,
            exp_year: null
        },
        token: null,
        amount: (amount1 * 100)
    };
//Function to create a stripe token and the call backend charge functionality to client on purchase
    $scope.charge = function() {


  
        return stripe.card.createToken($scope.payment.card)
            .then(function(response) {
                alert('token created for card ending in ' + response.card.last4);
                var payment = angular.copy($scope.payment);
                payment.card = void 0;
                payment.token = response.id;
                return $http.post('http://localhost:8080/stripe', payment);
            })
            .then(function(payment) {
              alert('successfully submitted payment!');
            })
            .catch(function(err) {
                if (err.type && /^Stripe/.test(err.type)) {
                  alert('Stripe error: '+ err.message);
                } else {
                  alert('Other error occurred, possibly with your API ' + err.message);
                }
            });
    };
}

stripeController.$inject = ['$scope', '$location', 'factory', 'stripe', '$http'];
App.controller('stripeController', stripeController);
