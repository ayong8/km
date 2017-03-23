var express = require('express');
var mongoose = require('mongoose');
// var filestring = require('fs');
var html = require('html');
var app = express();


// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}


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

/*
app.get('/km', function(request, response, next) {
  filestring.readFile('./views/km.html', function (error, data) {
  	response.send(data.toString());
  });
});
*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
