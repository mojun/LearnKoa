/**
 * Created by test on 16/6/30.
 */

"use strict";
const  app = require('koa.io')();
const router = require('koa-router')();
const errorHandle = require('./middlewares/error_handle.js');
const bodyParser = require('koa-bodyparser');

app.use(errorHandle());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;


function abc(a, b, c) {
    console.log("a=%s, b=%s, c=%s", a, b, c);
}

function go(x, y, z) {
    abc.apply(this, arguments);
}

go(1, 2);