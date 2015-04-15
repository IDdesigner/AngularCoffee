var myApp = angular.module('myApp', [
	'ngRoute',
	'coffeeController',
	'firebase'
]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/coffeeChart', {
		templateUrl: 'partials/coffeeChart.html',
		controller: 'JavaController'
	}).
	otherwise({
		redirectTo: '/coffeeChart'
	});

}]);