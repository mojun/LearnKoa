/**
 * Created by test on 16/7/13.
 */
const config = require('../../config/index.js');
const redis = require('redis');
const wrapper = require('co-redis');
const client = redis.createClient(config.redis.cache.port, config.redis.cache.host, {
    no_ready_check: true,
    db:0
});
client.auth(config.redis.cache.opts.password);
exports.redis = wrapper(client);