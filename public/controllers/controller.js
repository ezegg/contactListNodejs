function AppCtrl($scope, $http) {
	console.log('hello controller');

	$http.get('/contactlist').success(function  (response) {
		console.log('got the data i requested');
		console.log(response)
		$scope.contactlist = response;
	});

}