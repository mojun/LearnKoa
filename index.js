/**
 * Created by test on 16/6/30.
 */

var app = require('./app.js');
var http = require('http');
var config = require('./config/index.js');

http.createServer(app.callback()).listen(config.port, function () {
    console.log('[start][process: %s] [service port: %s]', process.pid, config.port);
});
console.log('go go go!!!');
