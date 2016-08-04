/**
 * Created by test on 16/7/13.
 */
"use strict";
const crypto = require('crypto');
const moment = require('moment');
const Buffer = require('buffer').Buffer;
const _ = require('lodash');
const config = require('../config/index.js');

var isObject = (thing) => {
    return Object.prototype.toString.call(thing) === '[object Object]';
};

exports.jsonParse = (thing) => {
    thing = thing || {};
    try {
        if (isObject(thing)) return thing;
        return JSON.parse(thing);
    } catch (e) {
        console.log('[helper.js][jsonParse', e, thing);
        return {};
    }
};

var throwError = function (jsonError) {
    throw new Error(JSON.stringify(jsonError));
};
exports.throwError = throwError;

var md5 = exports.md5 = function (str) {
    if(!str) return;
    var buf = new Buffer(str);
    str = buf.toString("binary");
    return crypto.createHash("md5").update(str).digest("hex");
};

exports.querystring = (data)=> {
    let keys = Object.keys(data);
    keys.sort();
    let _signString = [];
    for (let i=0; i<keys.length; i++) {
        if ((typeof data[keys[i]]) === 'object') {
            _signString.push(keys[i] + '=' + JSON.stringify(data[keys[i]]));
        } else {
            _signString.push(keys[i] + '=' + data[keys[i]]);
        }
    }
    return _signString.join('&');
};

exports.checkMobilePhone = function (val) {
    if (!val) return false;
    val = val.toString().replace(/(^\s+)|(\s+$)/g, "");
    var reg = /^(86)?1\d{10}$/;
    return reg.test(val);
};

exports.checkPhone = function (val) {
    if (!val) return false;
    val = (val).toString().replace(/(^\s+)|(\s+$)/g, "");
    var reg = /(^(\d{2,4}[-_－—]?)?\d{3,8}([-_－—]?\d{3,8})?([-_－—]?\d{1,7})?$)|(^0?1\d{10}$)/;
    return reg.test(val);
};

exports.password = function *(pwd) {
    return yield md5(pwd + config.salt);
};