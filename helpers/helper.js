/**
 * Created by test on 16/7/13.
 */
"use strict";
const crypto = require('crypto');
const moment = require('moment');
const Buffer = require('buffer').Buffer;
const _ = require('lodash');
var crypto = require('crypto');

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