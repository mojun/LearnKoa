/**
 * Created by test on 16/7/13.
 */
"use strict";
const helper = require('../../helpers/helper.js');

class RedisHelper {
    constructor(redis) {
        this.redis = redis;
    }

    * setCache(key, datas, expired) {
        yield this.redis.set(key, JSON.stringify(datas));
        if (expired)
            yield this.redis.expire(key, expired);
    }

    * getCache(key) {
        yield helper.jsonParse(yield this.redis.get(key));
    }
}

module.exports = new RedisHelper((require('../redis').redis));