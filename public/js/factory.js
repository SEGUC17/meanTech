App.factory('factory', function($http, $location) {
    const apiUrl = 'http://localhost:8080/';
    let selectedPurchase = null;
    let token = null;
    return {
        clientLogin: function(user) {
            return $http.post('http://localhost:8080/clientLogin', user);
        },
        companyLogin: function(user) {
            return $http.post('http://localhost:8080/companyLogin', user);

        },
        createEvent: function(info) {
            return $http.post('http://localhost:8080/event', info, {
                headers: {
                    'x-access-token': token
                }
            });

        },
        companySubscription: function(info) {
            return $http.post('http://localhost:8080/company', info);

        },
        getAllEvents: function () {
           return $http.get('http://localhost:8080/allEvents');
       },
        setToken: function(newToken) {
            token = newToken;
        },
        getToken: function() {
            return token;
        },
        setSelectedPurchase: function(newItem) {
            selectedPurchase = newItem;
        },
        getSelectedPurchase: function() {
            return selectedPurchase;
        }

    };
});
