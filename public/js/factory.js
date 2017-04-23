App.factory('factory', function ($http, $location) {
    const apiUrl = 'http://localhost:8080/';

    let token = null;
    return {
        clientLogin: function (user) {
            return $http.post('http://localhost:8080/clientLogin', user);
        },
        companyLogin: function (user) {
            return $http.post('http://localhost:8080/companyLogin', user);

        },
        createEvent: function (info) {
            return $http.post('http://localhost:8080/event', info, {
                headers: {
                    'x-access-token': token
                }
            });

        },
        createService: function (info) {
            return $http.post('http://localhost:8080/createService', info, {
                headers: {
                    'x-access-token': token
                }
            });

        },

        updateService: function (info) {
            return $http.post('http://localhost:8080/updateService', info, {
                headers: {
                    'x-access-token': token
                }
            });

        },
        deleteService: function (info) {
            console.log("inside the factory of  deleteService ");
            return $http.post('http://localhost:8080/deleteService', info, {
                headers: {
                    'x-access-token': (token)
                }
            });

        },
        viewServices: function (info) {
            return $http.get('http://localhost:8080/viewServices', {
                headers: {
                    'x-access-token': token
                }
            })
        },
        companySubscription: function (info) {
            return $http.post('http://localhost:8080/company', info);

        },
        setToken: function (newToken) {
            token = newToken;
        },
        getToken: function () {
            return token;
        }

    };
});