var express = require('express');
var app = express();

/*app.get('/', function  (req, res) {
	res.send('Hello world');
});*/

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
	console.log('get Request');
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
	res.json(contactlist);
});

app.listen(3000);
console.log('Server running');