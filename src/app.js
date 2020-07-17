
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , sass = require('node-sass-middleware')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , favicon = require('serve-favicon')
  , morgan = require('morgan')
  , errorHandler = require('errorhandler');

var routes = require('./routes');

var app = express();

app.use(sass({
	src: __dirname,
	dest: path.join(__dirname, 'public/'),
	debug: true,
	outputStyle: 'compressed'
}));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if (app.get('env') === 'development') {
  app.use(errorHandler());
}

routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('File hosting server listening on port ' + app.get('port'));
});
