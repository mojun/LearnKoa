/**
 * Created by test on 16/7/13.
 */

var Sequelize = require('sequelize');
var config = require('../config/index.js');
var im = new Sequelize(config.mysql.im.database,
    config.mysql.im.username,
    config.mysql.im.password, {
        host: config.mysql.im.host,
        port: config.mysql.im.port,
        dialect: 'mysql',
        pool: {
            max: config.mysql.im.max,
            min: 0,
            idle: 10000
        }
    }
);

exports.im = im;