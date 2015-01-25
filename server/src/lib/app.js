'use strict';

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var bodyParser = require('body-parser');
var logger = require('morgan');
var config = require('config');
var serveStatic = require('serve-static');
var routes = require('../routes');

app.set('env', config.get('env'));
app.set('port', config.get('port'));
app.use(serveStatic(config.get('paths.client.build.root')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger(config.get('loggerOptions')));

routes(app);

module.exports = app;
