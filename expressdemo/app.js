
/**
 * Module dependencies.
 */

var express = require('express')
  , app_routes = require('./routes')
  , user = require('./routes/user')
  , task_route = require('./routes/task')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
	res.send('NEW ONE!');
});
app.get('/users', user.list);

app.get('/taskInfo',task_route.get_task);
app.get('/saveTask',task_route.get_save_task);
app.post('/saveTask',task_route.save_task);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
