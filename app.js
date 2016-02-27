'use strict';

var express = require('express');
var stylus  = require('stylus');

var app = module.exports = exports = express();

// Configuration

app.set('port', process.env.PORT || 8123);
app.set('views', './views');
app.set('view engine', 'jade');

// Middleware

app.use(require('morgan')('dev'));

app.use(express.static('./public'));

app.use(stylus.middleware({
	src: './public',
	compress: true
}));

// DOES'T WORK !!!!!!!!!!!!!!!!!!!!!!!!1
// app.use(express.logger('dev'));

// app.use(app.router);