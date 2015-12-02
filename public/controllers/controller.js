function AppCtrl($scope, $http) {
	//console.log('hello controller');

	var refresh = function  () {
		$http.get('/contactlist').success(function  (response) {
			console.log('--- success get contactlist controller.js ----');
			//console.log(response)
			$scope.contactlist = response;
		});
	};

	refresh();

	$scope.addContact = function  () {
		//console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function  (response) {
			console.log('--- success addContact contactlist controller.js ----');
			//console.log(response);
			refresh();
		});
	};

	$scope.remove = function  (id) {
		//console.log(id);
		$http.delete('contactlist/'+id).success(function  (response) {
			console.log('--- success Delete contactlist controller.js ----');
			refresh();
		});
		
	};

	$scope.edit = function  (id) {
		//console.log(id);
		$('#add').hide();
		$('#update').removeClass('hide');
		$http.get('/contactlist/'+id).success(function  (response) {
			console.log('--- success get contactlist and show in frontend controller.js ----');
			$scope.contact = response;
		});
	};

	$scope.update = function  () {
		//console.log($scope.contact._id);
		$http.put('/contactlist/'+ $scope.contact._id, $scope.contact).success(function  (response) {
			console.log('--- success update contactlist controller.js ----');
			refresh();
			$('#add').show();
			$('#update').addClass('hide');
			$('#name').val('');
			$('#email').val('');
			$('#number').val('');
		});
	};

}