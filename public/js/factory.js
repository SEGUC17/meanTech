App.factory('factory', function ($http, $location) {
    const apiUrl = 'http://localhost:8080/';

    let token = null;
    return {
        adminRegister: function(info){
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

        adminHome: () => {
            return $http.get(apiUrl + 'adminHome');
        },

        setToken: (loginToken) => {
            token = loginToken;
        },

        getToken: () => {
            return token;
        },

    };

});