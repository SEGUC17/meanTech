// App.factory('factory', function ($http, $location) {
//     const apiUrl = 'locahost:8080/';
// let token = null;

//     const user = {
//         username: null,
//         password: null,
//         token: null
//     };

//     return {
//         clientLogin: function () {
//             return $http({
//                 method: 'POST',
//                 url: apiUrl + 'clientLogin',
//                 data: JSON.stringify({
//                     username: user.username,
//                     password: user.password
//                 })
//             });
//         }
//     };

//      return {
//         getCompanyEvents: function () {
//             return $http({
//                 method: 'GET',
//                 url: apiUrl + 'getCompanyEvents',
//                 headers: {
//                     'x-access-token': token
//                 }
//                 // data: JSON.stringify({
//                 //     username: user.username,
//                 //     password: user.password
//                 // })
//             });
//      

//     };
// //receive the data using the route from the back end and return it to the ctrl 
 
// });
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

        updateEvents: function(event) {
            return $http.post('http://localhost:8080/updateEvents', event, {
                headers: {
                    'x-access-token': token
                }
            });

        },
        

    };
});
