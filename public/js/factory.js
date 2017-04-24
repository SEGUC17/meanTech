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
        companySubscription: function (info) {
            return $http.post('http://localhost:8080/company', info);

        },
        setToken: function (newToken) {
            token = newToken;
        },
        getToken: function () {
            return token;
        },

        getCompanyEvents: function () {
            return $http.get('http://localhost:8080/getCompanyEvents', {

                headers: {
                    'x-access-token': token
                }
            });


        },


        viewRatings: function (companyID) {
            return $http.post('http://localhost:8080/viewRatings', companyID, {

                headers: {
                    'x-access-token': token
                }
            });


        },

        updateEvent: function (info) {
            return $http.post('http://localhost:8080/updateEvents', info, {
                headers: {
                    'x-access-token': token
                }
            })

        },

        deleteEvent: function (info) {
            return $http.post('http://localhost:8080/deleteEvent', info, {
                headers: {
                    'x-access-token': token
                }
            });

        },

    };
});