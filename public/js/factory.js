<<<<<<< HEAD
App.factory('factory', ($http, $location) => {
    // const apiUrl = 'http://localhost:8080/';

    let token = null;
    return {
        clientLogin: (user) => {
            return $http.post('http://localhost:8080/clientLogin', user);
        },

        companyLogin: (user) => {
            return $http.post('http://localhost:8080/companyLogin', user);
        },

        userViewAllPromotions: () => {
            return $http.get('http://localhost:8080/getAllPromotions');
        },

        clientUpdatePassword: (newPassword) => {
            return $http.post('http://localhost:8080/clientUpdatePassword', newPassword, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        companyUpdatePassword: (newPassword) => {
            return $http.post('http://localhost:8080/companyUpdatePassword', newPassword, {
                headers: {
                    'x-access-token': token,
                },
            });
        },

        //TODO adminUpdatePassword

        clientResetPassword: (data) => {
            return $http.post('http://localhost:8080/clientResetPassword', data, {
            });
        },

        companyResetPassword: (data) => {
            return $http.post('http://localhost:8080/companyResetPassword', data, {
            });
        },

        adminResetPassword: (data) => {
            return $http.post('http://localhost:8080/adminResetPassword', data, {
            });
        },


        setToken: (newToken) => {
            token = newToken;
        },

        getToken: () => {
            return token;
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
    
    getCompanyEvents: function(){
        console.log("it gets to the factory of get company events");
        return $http.get('http://localhost:8080/getCompanyEvents',{
             
                headers: {
                    'x-access-token': token
                }
        });

        
    },
     viewRatings: function(companyID){
        console.log("it gets to the factory of view ratings");
        return $http.post('http://localhost:8080/viewRatings',companyID,{
             
                headers: {
                    'x-access-token': token
                }
        });

        
    },

       updateEvent: function(info) {
           console.log("inside the factory of  update events");
            return $http.post('http://localhost:8080/updateEvents', info, {
                headers: {
                    'x-access-token': token
                }
            })

        },

               deleteEvent: function(info) {
           console.log("inside the factory of  deleteEvent ");
            return $http.post('http://localhost:8080/deleteEvent', info, {
                headers: {
                    'x-access-token': token
                }
            });

        }

    };
});
