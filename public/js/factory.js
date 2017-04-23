App.factory('factory', function($http, $location) {
    const apiUrl = 'http://localhost:8080/';
    let selectedCompany = null;
    let companyReview = null;
    let token = null;
    return {
        clientLogin: function(user) {
            return $http.post('http://localhost:8080/clientLogin', user);
        },
        companyLogin: function(user) {
            return $http.post('http://localhost:8080/companyLogin', user);

        },
        createEvent: function(info) {
            return $http.post('http://localhost:8080/event', info, {
                headers: {
                    'x-access-token': token
                }
            });

        },
        companySubscription: function(info) {
            return $http.post('http://localhost:8080/company', info);

        },
        setToken: function(newToken) {
            token = newToken;
        },
        getToken: function() {
            return token;
        },
       
       
       
        askFAQ: function (question) {
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

        MyCompanyProfile: function() {
            return $http.get('http://localhost:8080/viewMyProfile',{
                headers: {
                    'x-access-token': token
                },
            });

        },

        companyList: function(){
            return $http.get('http://localhost:8080/companyLists')
        },

         setSelectedCompany: function(id) {
            selectedCompany = id;
        },
        getSelectedCompany: function() {
            return selectedCompany;
        },
      
        setCompanyReview: function(company) {
            companyReview = company;
        },
        getCompanyReview: function() {
            return companyReview;
        },
           postReview: function (info) {
            return $http.post('http://localhost:8080/review', info, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

       
    };
});
