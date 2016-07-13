/**
 * Created by test on 16/6/30.
 */

"use strict";
const  app = require('koa')();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());


module.exports = app;
