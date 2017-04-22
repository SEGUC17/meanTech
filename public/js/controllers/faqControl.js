const faqControl = function ($scope, $location, factory) {
  
   $scope.question = {};
    $scope.askquestion = function askquestion() {
       
    
    
     factory.askFAQ($scope.question)
            .success(function(data){
                console.log($scope.question);
                alert("Question posted")
            }).error(function(error){
                alert(error.messaage)
            });
    };
};

faqControl.$inject = ['$scope', '$location', 'factory'];
App.controller('faqControl', faqControl);
