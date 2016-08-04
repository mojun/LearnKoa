/**
 * Created by test on 16/7/13.
 */
"use strict";
const config = require('../../config/index.js');
const redis = require('redis');
const wrapper = require('co-redis');
const client = redis.createClient(config.redis.cache.port, config.redis.cache.host, {
    no_ready_check: true,
    db:0
});
const co = require('co');
const pwd = config.redis.cache.opts.password;
// if (pwd.length > 0) {
    client.auth(config.redis.cache.opts.password);
// }
client.on("error", function (err) {
    console.log("Error " + err);
});

var coRedis = wrapper(client);

client.on("ready", function () {
    console.log("redis connected");
    co(function *() {
        yield coRedis.set("123", "good");
        var data = yield coRedis.get("123");
        console.log(data);
    }).then(function () {
        console.log("ok");

    }, function (error) {
        console.log("error: " + error);
    });
});



exports.redis = coRedis;