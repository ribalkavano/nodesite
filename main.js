'use strict';

var http = require('http');

var app = require('./app');

var port = app.get('port');

require('./routes');

http.createServer(app).listen(port, function() {
	console.log('Visit http://localhost:' + port + ' to begin your work.');
});