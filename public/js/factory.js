App.factory('factory', ($http, $location) => {
    const apiURL = 'http://localhost:8080/';
    let token = null;

    return {
        clientLogin: (user) => {
            return $http.post(apiURL.concat('clientLogin'), user);
        },

        companyLogin: (user) => {
            return $http.post(apiURL.concat('companyLogin'), user);
        },

        userViewAllPromotions: () => {
            return $http.get(apiURL.concat('getAllPromotions'));
        },

        companyUpdatePassword: (newPassword) => {
            return $http.post(apiURL.concat('companyUpdatePassword'), newPassword, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        //TODO adminUpdatePassword

        clientResetPassword: (data) => {
            return $http.post(apiURL.concat('clientResetPassword'), data, {
            });
        },

        companyResetPassword: (data) => {
            return $http.post(apiURL.concat('companyResetPassword'), data, {
            });
        },

        adminResetPassword: (data) => {
            return $http.post(apiURL.concat('adminResetPassword'), data, {
            });
        },

        createEvent: function (info) {
            return $http.post(apiURL.concat('event'), info, {
                headers: {
                    'x-access-token': (token)
                }
            });

        },

        companySubscription: function (info) {
            return $http.post(apiURL.concat('company'), info);

        },

        getCompanyEvents: function () {
            console.log("it gets to the factory of get company events");
            return $http.get(apiURL.concat('getCompanyEvents'), {

                headers: {
                    'x-access-token': token
                }
            });


        },

        viewRatings: function (companyID) {
            console.log("it gets to the factory of view ratings");
            return $http.post(apiURL.concat('viewRatings'), companyID, {
                headers: {
                    'x-access-token': token
                }
            });


        },

        updateEvent: function (info) {
            console.log("inside the factory of  update events");
            return $http.post(apiURL.concat('updateEvents'), info, {
                headers: {
                    'x-access-token': token
                }
            })

        },

        deleteEvent: function (info) {
            console.log("inside the factory of  deleteEvent ");
            return $http.post('http://localhost:8080/deleteEvent', info, {
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


        getAllEvents: function () {
            return $http.get('http://localhost:8080/allEvents');
        },
        getAllServices: function () {
            return $http.get('http://localhost:8080/allServices');
        },
        addFavCompanies: function (compID) {
            return $http.post('http://locahost:8080/favCompanies', compID, {
                headers: {
                    'x-access-token': token
                }
            });
        },

        setToken: (newToken) => {
            token = newToken;
        },

        getToken: () => {
            return token;
        },


        postPromotion: function (info) {
            return $http.post('http://localhost:8080/postPromotion1', info, {
                headers: {
                    'x-access-token': token
                }
            });
        },
        viewPromotions: function () {
            return $http.get('http://localhost:8080/viewPromotions1', {

                headers: {
                    'x-access-token': token
                }
            });
        },
        deletePromotion: function (info) {

            return $http.post('http://localhost:8080/deletePromotion1', info, {
                headers: {
                    'x-access-token': token
                }
            });

        }

    };
});