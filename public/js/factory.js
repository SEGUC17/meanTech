App.factory('factory', function ($http, $location) {
    const apiUrl = 'http://localhost:8080/';
    let selectedCompany = null;
    let companyReview = null;
    let token = null;
    let selectedPurchase = null;
    let username = null;
    let isClientUser = false;
    let questionId = null;
    let isAdminUser = false;
    let isBusinessUser = false;

    return {
        setClientUser: function () {
            isClientUser = true;
        },

        setClientUserFalse: function () {
            isClientUser = false;
        },

        setBusinessUser: function () {
            isBusinessUser = true;
        },
        setBusinessUserFalse: function () {
            isBusinessUser = false;
        },
        setAdminUser: function () {
            isAdminUser = true;
        },
        setAdminUserFalse: function () {
            isAdminUser = false;
        },

        isClientUser: function () {
            return isClientUser;
        },

        isBusinessUser: function () {
            return isBusinessUser;
        },

        isAdminUser: function () {
            return isAdminUser;
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

        logout: function () {
            isClientUser = false;
            isAdminUser = false;
            isBusinessUser = false;
            return $http.get(apiUrl.concat('/'));
        },

        //see all the promotions as a client
        userViewAllPromotions: () => {
            return $http.get(apiUrl.concat('getAllPromotions'));
        },
        //update password as a client
        clientUpdatePassword: (newPassword) => {
            return $http.post(apiUrl.concat('clientUpdatePassword'), newPassword, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        //update password as a company
        companyUpdatePassword: (newPassword) => {
            return $http.post(apiUrl.concat('companyUpdatePassword'), newPassword, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        updatePromotion: function (info) {
            return $http.post(apiUrl.concat('updatePromotion1'), info, {
                headers: {
                    'x-access-token': token
                }
            })
        },
        //update password as an admin
        adminUpdatePassword: (newPassword) => {
            return $http.post(apiUrl.concat('adminUpdatePassword'), newPassword, {
                headers: {
                    'x-access-token': token,
                },
            });
        },
        //reset password as a client when forgotten
        clientResetPassword: (data) => {
            return $http.post(apiUrl.concat('clientResetPassword'), data, {});
        },
        //reset password as a company when forgotten
        companyResetPassword: (data) => {
            return $http.post(apiUrl.concat('companyResetPassword'), data, {});
        },
        //reset password as an admin when forgotten
        adminResetPassword: (data) => {
            return $http.post(apiUrl.concat('adminResetPassword'), data, {});
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
            return $http.post(apiUrl.concat('addToFavCompanies'), {
                companyID: compID
            }, {
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
        },


        adminRegister: function (info) {
            return $http.post(apiUrl + 'adminRegister', info);
        },

        adminLogin: (user) => {
            return $http.post(apiUrl + 'adminLogin', user);
        },

        deleteCompany: (user) => {
            return $http.post(apiUrl + 'deleteCompany', user, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        viewFAQs: () => {
            return $http.get(apiUrl + 'FAQView');
        },

        unverifiedCompanies: () => {

            return $http.get(apiUrl + 'unverifiedCompanies', {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        verifyCompanies: (user) => {
            return $http.post(apiUrl + 'verifyCompanies', user, {
                headers: {
                    'x-access-token': token,

                },
            });
        },
        viewCompanies: () => {
            return $http.get(apiUrl + 'viewCompanies', {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        setQuestionId: (newId) => {
            questionId = newId;
        },
        getQuestionId: () => {
            return questionId;
        },


    };
});