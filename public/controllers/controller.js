function AppCtrl($scope) {
	console.log('hello controller');

	person1 = {
		name: 'Ezequiel',
		email: 'ezeezegg@gmail.com',
		number: '1111-1111'
	};

	person2 = {
		name: 'sebastian',
		email: 'sebastian@gmail.com',
		number: '2222-1111'
	};

	person3 = {
		name: 'jorge',
		email: 'jorge@gmail.com',
		number: '3333-1111'
	};

	var contactlist = [person1, person2, person3];

	$scope.contactlist = contactlist;

}