function AppCtrl($scope, $http) {
	console.log('hello controller');

	$http.get('/contactlist').success(function  (response) {
		console.log('got the data i requested');
		console.log(response)
		$scope.contactlist = response;
	});

	$scope.addContact = function  () {
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact);
	}

}