/**
 * Created by test on 16/7/14.
 */
"use strict";
const Sequelize = require('sequelize');
const im = require('../db/mysql.js').im;
const Model = require('../db/Model.js');
const ERROR = require('../const/error_msgs.js');
const helper = require('../helpers/helper.js');
const config = require('../config/index.js');
var validation = function (item, options, fn) {
    if (!item.password || !item.email || !item.salt) {
        return helper.throwError(ERROR.e400000);
    } else {
        fn(null, item);
    }
};

var schema = {
    id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true},
    name: Sequelize.STRING(20),
    password: Sequelize.STRING(64),
    email: Sequelize.STRING(50),
    avatar: Sequelize.TEXT,
    salt: Sequelize.STRING(32)
};

