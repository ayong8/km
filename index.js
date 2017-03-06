var express = require('express');
var mongoose = require('mongoose');
var html = require('html');
var fs = require('fs');
var app = express();

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
	console.log("Connected to mongod server");
});

mongoose.connect("mongodb://ds023530.mlab.com:23530/heroku_ksvswfjq");


// Set server
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/km', function(request, response, next) {
  fs.readFile('./views/km.html', function (error, data) {
  	response.send(data.toString());
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
