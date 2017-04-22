const updateProfileController = function ($scope, $location, factory) {
    $scope.clientUpdateProfileForm = {};

    $scope.clientUpdateProfile = function clientUpdateProfile() {
        factory.clientUpdateProfile($scope.clientUpdateProfileForm)
            .success(function (data) {
                // alert('Profile updated Successfully');
                console.log('SUCCESS =>', data);
            }).error(function (error) {
                // alert(error.message);
                console.log('ERROR =>', error);
            });
    };
};
updateProfileController.$inject = ['$scope', '$location', 'factory'];
App.controller('updateProfileController', updateProfileController);


// const updateProfileController = function ($scope, $location, factory) {


//     factory.clientUpdateProfile()
//         .then(function (data) {
//             // console.log("in clientcieprofile.js");
//             // console.log("in clientcieprofile.00js");
//             // console.log(data.data[0]);
//             // console.log("inisde the ctrl");
//             // console.log(data.data.data[0])
//             $scope.profile = data.data.data[0];
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// };

// updateProfileController.$inject = ['$scope', '$location', 'factory'];
// App.controller('updateProfileController', updateProfileController);

