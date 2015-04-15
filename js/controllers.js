var coffeeController = angular.module('coffeeController', ['firebase']);

coffeeController.controller('JavaController', ['$scope', '$http', '$firebaseArray', function($scope, $http, $firebaseArray) {

	var ref = new Firebase('https://coffeevarietyapp.firebaseio.com/Coffee');
	$scope.coffeeList = $firebaseArray(ref);

	$scope.addCoffee = function() {
		$scope.coffeeList.$add({
			brand: $scope.addBrand,
			name: $scope.addName,
			origin: $scope.addOrigin,
			roast: $scope.addRoast,
			flavor: $scope.addFlavors
		});
	};
	
}]); // Controller for coffeeController