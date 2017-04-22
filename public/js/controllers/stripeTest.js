const stripeController = function($scope, $location, factory, stripe, $http) {
    $scope.payment = {
        card: {
            number: '4242 4242 4242 4242',
            cvc: '187',
            exp_month: 12,
            exp_year: 2020
        },
        token: null,
        amount: 200
    };

    $scope.charge = function() {
        return stripe.card.createToken($scope.payment.card)
            .then(function(response) {
                console.log('token created for card ending in ', response.card.last4);
                var payment = angular.copy($scope.payment);
                payment.card = void 0;
                payment.token = response.id;
                return $http.post('http://localhost:8080/stripe', payment);
            })
            .then(function(payment) {
                console.log('successfully submitted payment for $', payment.amount);
            })
            .catch(function(err) {
                if (err.type && /^Stripe/.test(err.type)) {
                    console.log('Stripe error: ', err.message);
                } else {
                    console.log('Other error occurred, possibly with your API', err.message);
                }
            });
    };
}

stripeController.$inject = ['$scope', '$location', 'factory', 'stripe', '$http'];
App.controller('stripeController', stripeController);
