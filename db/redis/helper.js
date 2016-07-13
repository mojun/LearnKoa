/**
 * Created by test on 16/7/13.
 */
"use strict";
const helper = require('../../helpers/helper.js');

class RedisHelper {
    constructor(redis) {
        this.redis = redis;
    }
}

module.exports = new RedisHelper((require('../redis').redis));