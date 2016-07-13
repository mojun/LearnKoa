/**
 * Created by test on 16/6/30.
 */

var app = require('./app.js');
var http = require('http');

http.createServer(app.callback()).listen(3000);