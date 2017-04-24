App.factory('factory', function ($http, $location) {
    const apiUrl = 'http://localhost:8080/';
    let selectedCompany = null;
    let companyReview = null;
    let token = null;

    return {
        clientLogin: (user) => {
            return $http.post(apiUrl.concat('clientLogin'), user);
        },

        companyLogin: (user) => {
            return $http.post(apiUrl.concat('companyLogin'), user);
        },

        companyUpdatePassword: (newPassword) => {
            return $http.post(apiUrl.concat('companyUpdatePassword'), newPassword, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        //TODO adminUpdatePassword

        clientResetPassword: (data) => {
            return $http.post(apiUrl.concat('clientResetPassword'), data, {
            });
        },

        companyResetPassword: (data) => {
            return $http.post(apiUrl.concat('companyResetPassword'), data, {
            });
        },

        adminResetPassword: (data) => {
            return $http.post(apiUrl.concat('adminResetPassword'), data, {
            });
        },

        createEvent: function (info) {
            return $http.post(apiUrl.concat('event'), info, {
                headers: {
                    'x-access-token': (token)
                }
            });

        },

        companySubscription: function (info) {
            return $http.post(apiUrl.concat('company'), info);

        },

        getCompanyEvents: function () {
            console.log("it gets to the factory of get company events");
            return $http.get(apiUrl.concat('getCompanyEvents'), {

                headers: {
                    'x-access-token': token
                }
            });


        },

        viewRatings: function (companyID) {
            console.log("it gets to the factory of view ratings");
            return $http.post(apiUrl.concat('viewRatings'), companyID, {
                headers: {
                    'x-access-token': token
                }
            });


        },

        updateEvent: function (info) {
            console.log("inside the factory of  update events");
            return $http.post(apiUrl.concat('updateEvents'), info, {
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
                    'x-access-token': token,
                },
            });
        },
        adminRegister: function (info) {
            return $http.post(apiUrl + 'adminRegister', info);
        },

        adminLogin: (user) => {
            return $http.post(apiUrl + 'adminLogin', user);
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
        deleteReview: function (info) {
            return $http.post('http://localhost:8080/deleteR', info, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
        askQuestion: function (question) {
            return $http.post('http://localhost:8080/faq', question, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        myReviews: function () {
            return $http.get('http://localhost:8080/viewMyReviews', {
                headers: {
                    'x-access-token': token
                },
            });
        },
        CompanyProfile: function (company) {
            return $http.get('http://localhost:8080/company/profile', company);
        },

        MyCompanyProfile: function () {
            return $http.get('http://localhost:8080/viewMyProfile', {
                headers: {
                    'x-access-token': token
                },
            });

        },

        companyList: function () {
            return $http.get('http://localhost:8080/companyLists')
        },

        setSelectedCompany: function (id) {
            selectedCompany = id;
        },
        getSelectedCompany: function () {
            return selectedCompany;
        },

        setCompanyReview: function (company) {
            companyReview = company;
        },
        getCompanyReview: function () {
            return companyReview;
        },


        viewProfile: function () {
            return $http.get('http://localhost:8080/viewProfile', {
                headers: {
                    'x-access-token': token
                },
            })
        },
        clientUpdateProfile: function (data) {
            return $http.post('http://localhost:8080/updateProfile', data, {
                headers: {
                    'x-access-token': token
                },
            });
        },
        viewFAQs: () => {
            return $http.get(apiUrl + 'FAQView');
        },
    };
});