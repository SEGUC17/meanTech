App.factory('factory', function ($http, $location) {
    const apiUrl = 'locahost:8080/';

    const user = {
        username: null,
        password: null,
        token: null
    };

    return {
        clientLogin: function () {
            return $http({
                method: 'POST',
                url: apiUrl + 'clientLogin',
                data: JSON.stringify({
                    username: user.username,
                    password: user.password
                })
            });
        },

        logout: function () {
            return $http({
                method: 'POST',
                url: apiUrl + 'logout',
                data: JSON.stringify({
                    token: null
                })
            });
        },

        getAllEvents: function () {
            return $http.get("/allEvents")
						.then(function(response){
							return response.data;
						})
        },

        getAllServices: function () {
            return $http.get("/allServices")
						.then(function(response){
							return response.data;
						})
        }
    };
});
