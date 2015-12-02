function AppCtrl($scope, $http) {
	console.log('hello controller');

	var refresh = function  () {
		$http.get('/contactlist').success(function  (response) {
			console.log('got the data i requested');
			console.log(response)
			$scope.contactlist = response;
		});
	};

	refresh();

	$scope.addContact = function  () {
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function  (response) {
			console.log(response);
			refresh();
		})
	}

}