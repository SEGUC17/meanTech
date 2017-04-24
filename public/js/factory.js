App.factory('factory', function ($http, $location) {
    const apiUrl = 'http://localhost:8080/';
    let selectedCompany = null;
    let companyReview = null;
    let token = null;
    let selectedPurchase = null;
    let username = null;
    let isClientUser = null;

    return {
        setClientUser: function () {
            isClientUser = true;
        },

        setBusinessUser: function () {
            isClientUser = false;
        },

        isBusinessUser: function () {
            return !isClientUser;
        },

        setUsername: function (newUsername) {
            username = newUsername;
        },

        getUsername: function () {
            return username;
        },

        clientLogin: (user) => {
            return $http.post(apiUrl.concat('clientLogin'), user);
        },

        companyLogin: (user) => {
            return $http.post(apiUrl.concat('companyLogin'), user);
        },

        userViewAllPromotions: () => {
            return $http.get(apiUrl.concat('getAllPromotions'));
        },

        clientUpdatePassword: (newPassword) => {
            return $http.post(apiUrl.concat('clientUpdatePassword'), newPassword, {
                headers: {
                    'x-access-token': token,
                },
            });
        },


        companyUpdatePassword: (newPassword) => {
            return $http.post(apiUrl.concat('companyUpdatePassword'), newPassword, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        adminUpdatePassword: (newPassword) => {
            return $http.post(apiUrl.concat('adminUpdatePassword'), newPassword, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

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
            return $http.get(apiUrl.concat('getCompanyEvents'), {

                headers: {
                    'x-access-token': token
                }
            });


        },

        viewRatings: function (companyID) {
            return $http.post(apiUrl.concat('viewRatings'), companyID, {
                headers: {
                    'x-access-token': token
                }
            });


        },

        updateEvent: function (info) {
            return $http.post(apiUrl.concat('updateEvents'), info, {
                headers: {
                    'x-access-token': token
                }
            })

        },

        deleteEvent: function (info) {
            return $http.post(apiUrl.concat('deleteEvent'), info, {
                headers: {
                    'x-access-token': token
                }
            });
        },

        createService: function (info) {
            return $http.post(apiUrl.concat('createService'), info, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
        adminRegister: function (info) {
            return $http.post(apiUrl.concat('adminRegister'), info);
        },

        adminLogin: (user) => {
            return $http.post(apiUrl.concat('adminLogin'), user);
        },

        updateService: function (info) {
            return $http.post(apiUrl.concat('updateService'), info, {
                headers: {
                    'x-access-token': token
                }
            });

        },
        deleteService: function (info) {
            return $http.post(apiUrl.concat('deleteService'), info, {
                headers: {
                    'x-access-token': (token)
                }
            });

        },
        viewServices: function (info) {
            return $http.get(apiUrl.concat('viewServices'), {
                headers: {
                    'x-access-token': token
                }
            })
        },


        getAllEvents: function () {
            return $http.get(apiUrl.concat('allEvents'));
        },
        getAllServices: function () {
            return $http.get(apiUrl.concat('allServices'));
        },
        addFavCompanies: function (compID) {
            return $http.post(apiUrl.concat('favCompanies'), compID, {
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

        clearToken: function () {
            token = null;
        },

        postPromotion: function (info) {
            return $http.post(apiUrl.concat('postPromotion1'), info, {
                headers: {
                    'x-access-token': token
                }
            });
        },
        viewPromotions: function () {
            return $http.get(apiUrl.concat('viewPromotions1'), {

                headers: {
                    'x-access-token': token
                }
            });
        },
        deletePromotion: function (info) {

            return $http.post(apiUrl.concat('deletePromotion1'), info, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
        postReview: function (info) {
            return $http.post(apiUrl.concat('review'), info, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
        register: function (client) {
            return $http.post(apiUrl.concat('register'), client);
        },
        answerQuestion: function (answer) {
            return $http.post(apiUrl.concat('faqa'), answer, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
        deleteReview: function (info) {
            return $http.post(apiUrl.concat('deleteR'), info, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
        askQuestion: function (question) {
            return $http.post(apiUrl.concat('faq'), question, {
                headers: {
                    'x-access-token': token,
                },
            });
        },



        askFAQ: function (question) {
            return $http.post(apiUrl.concat('faq'), question, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
        myReviews: function () {
            return $http.get(apiUrl.concat('viewMyReviews'), {
                headers: {
                    'x-access-token': token
                },
            });
        },
        CompanyProfile: function (company) {
            return $http.get(apiUrl.concat('company/profile'), company);
        },

        MyCompanyProfile: function () {
            return $http.get(apiUrl.concat('viewMyProfile'), {
                headers: {
                    'x-access-token': token
                },
            });

        },

        companyList: function () {
            return $http.get(apiUrl.concat('companyLists'))
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
            return $http.get(apiUrl.concat('viewProfile'), {
                headers: {
                    'x-access-token': token
                },
            })
        },
        clientUpdateProfile: function (data) {
            return $http.post(apiUrl.concat('updateProfile'), data, {
                headers: {
                    'x-access-token': token
                },

            });
        },
        setSelectedPurchase: function (newItem) {
            selectedPurchase = newItem;
        },
        getSelectedPurchase: function () {
            return selectedPurchase;
        }


    };
});
