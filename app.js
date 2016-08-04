/**
 * Created by test on 16/6/30.
 */

"use strict";
const  app = require('koa.io')();
const router = require('koa-router')();
const errorHandle = require('./middlewares/error_handle.js');
const bodyParser = require('koa-bodyparser');
const formatBody = require('./middlewares/format_body.js');
const checkSign = require('./middlewares/check_sign.js');
const routes = require('./routes/index.js');

app.use(errorHandle());
app.use(bodyParser());
app.use(formatBody());
app.use(checkSign());
routes(router);
app.use(router.routes()).use(router.allowedMethods());
require('./init/index.js');
module.exports = app;

///test
function abc(a, b, c) {
    console.log("a=%s, b=%s, c=%s", a, b, c);
}

function go(x, y, z) {
    abc.apply(this, arguments);
}

go(1, 2);