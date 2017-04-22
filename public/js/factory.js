
App.factory('factory', function($http, $location) {
    const apiUrl = 'http://localhost:8080/';

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
            return $http.post('http://localhost:8080/updateEvents', info, {
                headers: {
                    'x-access-token': token
                }
            });

        },
         postPromotion: function (info) {
            console.log("in factory");
            console.log(info);
            return $http.post('http://localhost:8080/postPromotion1', info, {
                headers: {
                    'x-access-token': token
                }
            });
            console.log(info,"factory line 72");

        }

    
        
    };
});
