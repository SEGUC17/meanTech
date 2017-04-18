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
        }
    };
});
