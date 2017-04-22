App.factory('factory', function ($http, $location) {
    const apiUrl = 'http://locahost:8080/';

    let token = null;

    return {

        clientLogin: function(user) {
            return $http.post('http://localhost:8080/clientLogin', user);
        },
        companyLogin: function(user) {
            return $http.post('http://localhost:8080/companyLogin', user);

        },
        getAllEvents: function () {
            return $http.get('http://localhost:8080/allEvents');
        },
        getAllServices: function () {
            return $http.get('http://localhost:8080/allServices');
        },
        setToken: function(newToken) {
            token = newToken;
        },
        getToken: function() {
            return token;
        },
        addFavCompanies: function (compID) {
            return $http.post('http://locahost:8080/favCompanies', compID, {
                headers: {
                    'x-access-token': token
                }
            });
        },
        logout: function () {
            return $http.post('http://locahost:8080/logout', {
                headers: {
                    'x-access-token': token
                }
            });
        }
    };
});
