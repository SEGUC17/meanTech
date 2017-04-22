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
                    'x-access-token': token,
                },
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
            console.log("it gets to the factory of get company events");
            return $http.get('http://localhost:8080/getCompanyEvents', {

                headers: {
                    'x-access-token': token,
                },
            });


        },
        viewRatings: function (companyID) {
            console.log("it gets to the factory of view ratings");
            return $http.post('http://localhost:8080/viewRatings', companyID, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        updateEvent: function (info) {
            console.log("inside the factory of  update events");
            return $http.post('http://localhost:8080/updateEvents', info, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
        postReview: function (info) {
            return $http.post('http://localhost:8080/review', info, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
        register: function (client) {
            return $http.post('http://localhost:8080/register', client);
        },
        answerQuestion: function (answer) {
            return $http.post('http://localhost:8080/faqa', answer, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
    };
});
