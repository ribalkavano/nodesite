'use strict';

var express = require('express');

var app = module.exports = exports = express();

// Configuration

app.set('port', process.env.PORT || 8123);
app.set('views', './views');
app.set('view engine', 'jade');

// Middleware

app.use(require('morgan')('dev'));




// DOES'T WORK !!!!!!!!!!!!!!!!!!!!!!!!1
// app.use(express.logger('dev'));

// app.use(app.router);