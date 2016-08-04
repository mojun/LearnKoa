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
    id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    username: Sequelize.STRING(20),
    password: Sequelize.STRING(64),
    nickyname: Sequelize.STRING(20),
    email: Sequelize.STRING(50),
    mobile: Sequelize.STRING(14),
    avatar: Sequelize.TEXT,
    active: Sequelize.BOOLEAN,
    salt: Sequelize.STRING(32),
    token: Sequelize.STRING(32)
};

var UserModel = Model(im, 'users', schema, validation);
UserModel.createUser = function *() {
    var user = this._json;
    user.salt = config.salt;
    user.password = yield helper.password(user.password);
    user.active = false;
    return yield UserModel.create(user);
};

UserModel.findByMobile = function *(mobile) {
    return yield UserModel.find({
        where: {
            mobile: mobile,
            enable: true
        }
    });
};

UserModel.findByEmail = function *(email) {
    return yield UserModel.find({
        where: {
            email: email,
            enable: true
        }
    });
};

module.exports = UserModel;