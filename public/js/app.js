App = angular.module('meanTech', ['ngRoute']);

//beginning Dan
App.controller('viewEventsCtrl',function($scope,$http){
App.controller('viewEventsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.hello="What the heck";
    }]);

event1={
	name:'event1',
	details :'details1',
	date :'2017-5-5',
	durationMins:22,
	address:"address1",
	pictureURL:"pic2",
	category:"careg2",
	price:2
};
event2={
	name:'event2',
	details :'details1',
	date :'2017-5-5',
	durationMins:22,
	address:"address1",
	pictureURL:"pic2",
	category:"careg2",
	price:2
};
event3={
	name:'event3',
	details :'details1',
	date :'2017-5-5',
	durationMins:22,
	address:"address1",
	pictureURL:"pic2",
	category:"careg2",
	price:2
};
var eventlist =[event1,event2,event3];
$scope.eventlist=eventlist;
});
// ending Dan 