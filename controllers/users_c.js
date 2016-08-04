/**
 * Created by test on 16/7/20.
 */
"use strict";

var helper = require("../helpers/helper.js");
var UserModel = require("../models/users_model.js");
var response = require("../util/response.js");
var apiError = require("../const/error_msgs.js");
var validator = require('validator');
var mail = require('../util/mail.js');
var config = require('../config/index.js');

exports.create = function *() {
    yield response.call(this, yield UserModel.createUser(this));
};

exports.signup = function *() {
    var user = this._json;
    var email = validator.trim(user.email);
    var password = validator.trim(user.password);
    var rePassword = validator.trim(user.rePassword);

    if (!email || !password || !rePassword) {
        return helper.throwError(apiError.e200010);
    }

    if (!validator.isEmail(email)) {
        return helper.throwError(apiError.e200009);
    }

    if (password.length < 6 || password.length > 18) {
        return helper.throwError(apiError.e200009);
    }

    if (password !== rePassword) {
        return helper.throwError(apiError.e200008);
    }

    var userItem = yield UserModel.findByEmail(email);
    if (userItem) {
        return helper.throwError(apiError.e200007);
    }
        
    var newUser = yield UserModel.createUser();
    if (newUser) {
        var token = helper.md5(email + newUser.password + config.email_salt);
        mail.sendActiveMail(email, token, email);
    }
    yield response.call(this, newUser);
};

exports.login = function *() {
    var user = this._json;
    var email = validator.trim(user.email);
    var password = validator.trim(user.password);

    if (!email || !password) {
        return helper.throwError(apiError.e200010);
    }

    if (!validator.isEmail(email)) {
        return helper.throwError(apiError.e200009);
    }

    if (password.length < 6 || password.length > 18) {
        return helper.throwError(apiError.e200009);
    }

    var userItem = yield UserModel.findByEmail(email);
    if (!userItem) {
        return helper.throwError(apiError.e200006);
    }

    var passwordHx = yield helper.password(password);
    if (passwordHx != userItem.password) {
        return helper.throwError(apiError.e200005);
    }
};

exports.activeAccount = function *() {
    var json = this._json;
    var key = validator.trim(json.key);
    var email = validator.trim(json.name);
    var user = yield UserModel.findByEmail(email);
    // if ()
};