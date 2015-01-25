'use strict';

var http = require('http');
var app = require('./lib/app');
var port = app.get('port');
var env = app.get('env');

http.createServer(app).listen(port, function() {
  console.log('Server listening in %s mode on port %d', env, port);
});
