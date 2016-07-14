/**
 * Created by test on 16/7/14.
 */
"use strict";
var apiError = require('../const/error_msgs.js');
var _ = require('lodash');
const CONST = require('../const/index.js');
var SequlizeHandle = (e)=> {
    var error = {};
    Object.assign(error, CONST.RESPONSE.FAILURE);
    error.data = e.errors;
    error.status = 400;
    return error;
};

function *errorInfo(e) {
    var info = {};
    try {
        if(!_.isEmpty(e.name.match(/^Sequelize/g))) return SequlizeHandle(e);
        info = JSON.parse(e.message);
    } catch (e) {
        info = apiError.e500000;
    }
    if (Object.keys(info).length < 3) {
        info = apiError.e500000;
    }
    info.data = info.data || {};
    return info;
}

module.exports = function() {
    return function*(next) {
        try {
            yield* next;
        } catch (e) {
            console.log('[error] %s', e);
            var error = yield errorInfo(e);
            this.status = error.status;
            this.body = {cd: error.cd, msg: error.msg, data: error.data};
        }
    };
};