App.factory('factory', function ($http, $location) {
    const apiUrl = 'localhost:8080/';

 

  let token = null;
      return {
        clientLogin: function(user) {
            return $http.post('http://localhost:8080/clientLogin', user);
        },
        companyLogin: function(user) {
            return $http.post('http://localhost:8080/companyLogin', user);

        },
        viewProfile: function(user){
             return $http.get('http://localhost:8080/viewProfile', user,{
             headers: {
                 'x-access-token': token
             }
             })
        },
    };
});
