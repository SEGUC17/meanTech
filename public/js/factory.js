App.factory('factory', function ($http, $location) {
    const apiUrl = 'http://locahost:8080/';

    let token = null;
    return {
        adminRegister: (info) => {
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

        FAQView: () => {
            return $http.post(apiUrl + 'FAQView');
        },

        unverifiedCompanies: () => {
            return $http.post(apiUrl + 'unverifiedCompanies', {
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
            return $http.post(apiUrl + 'viewCompanies', {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        setToken: (loginToken) => {
            token = loginToken;
        },

        getToken: () => {
            return token;
        },

    };

});