var express = require('express');
var mysql = require('credentials.js');

var app = express(); //creats instance of express
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 4000);

app.get('/', function(req, res, next){
	var context = {};
	mysql.pool.query('SELECT * FROM todo', function(err, rows, fields){
		if(err){
			next(err);
			reutrn;
		}
		context.results = JSON.stringify(rows);
		res.render('home', context);
	});
});

app.listen(app.get('port'), function(){
	console.log('Started on port 4000, ctrl-c to stop');
});