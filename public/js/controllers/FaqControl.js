const FaqControl = function ($scope, $location, factory) {
    $scope.question = {};
    $scope.askquestion = function askquestion() {
        factory.askFAQ($scope.question)
            .then(function (data) {
               
                // alert("Question posted");
                console.log("SUCCESS==>",data)
            }).catch(function (error) {
                console.log("Error==>",error.message);
                // alert(error.messaage);
            });
    };
};

FaqControl.$inject = ['$scope', '$location', 'factory'];
App.controller('FaqControl', FaqControl);
