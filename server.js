var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var app = express();
var db = mongojs('contactlist', ['contactlist']);

/*app.get('/', function  (req, res) {
	res.send('Hello world');
});*/

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
	console.log('***Get contactlist Server.js***');
	db.contactlist.find(function  (err, docs) {
		console.log(docs);
		res.json(docs);
	});

});

app.post('/contactlist', function  (req, res) {
	//we need install body parser
	console.log('***Post save contactlist Server.js***');
	console.log(req.body);
	db.contactlist.insert(req.body, function  (err, doc) {
		res.json(doc);
	})
})

app.delete('/contactlist/:id', function  (req, res) {
	console.log('***Delete contactlist Server.js***');
	console.log(id);
	var id = req.params.id;
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function  (err, doc) {
		res.json(doc);
	});
});

app.get('/contactlist/:id',function  (req, res) {
	console.log('***Get contactlist and show in FrontEnd Server.js***');
	var id = req.params.id;
	db.contactlist.findOne({_id : mongojs.ObjectId(id)}, function  (err, doc) {
		res.json(doc);
	});
})

app.put('/contactlist/:id',function  (req, res) {
	console.log('***Update contactlist Server.js***');
	var id = req.params.id;
	console.log(req.body.name);
	db.contactlist.findAndModify({ query : { _id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
		new: true},function  (err, doc) {
			res.json(doc);
		});
});

app.listen(3000);
console.log('Server running port 30000');









