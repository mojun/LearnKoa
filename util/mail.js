/**
 * Created by test on 16/8/2.
 */
var config = require('../config/index.js');
var mailer = require('nodemailer');
var util = require('util');
var transporter = mailer.createTransport(config.mail_opts);
var SITE_ROOT_URL = config.site_root_url;
var sendMail = exports.sendMail = function (data) {
    transporter.sendMail(data, function (err){
        if (err) {
            console.log(err);
        }
    });
};

/**
 * 发送激活通知邮件
 * @param {String} who 接收人的邮件地址
 * @param {String} token 重置用的token字符串
 * @param {String} name 接收人的用户名
 */
exports.sendActiveMail = function (who, token, name) {
    var from    = util.format('%s <%s>', 'TTT', config.mail_opts.auth.user);
    var to      = who;
    var subject = config.name + '社区帐号激活';
    var html    = '<p>您好：' + name + '</p>' +
        '<p>我们收到您在' + config.name + '社区的注册信息，请点击下面的链接来激活帐户：</p>' +
        '<a href  = "' + SITE_ROOT_URL + '/active_account?key=' + token + '&name=' + name + '">激活链接</a>' +
        '<p>若您没有在' + config.name + '社区填写过注册信息，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>' +
        '<p>' + config.name + '社区 谨上。</p>';
    sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html
    });
};

/**
 * 发送密码重置通知邮件
 * @param {String} who 接收人的邮件地址
 * @param {String} token 重置用的token字符串
 * @param {String} name 接收人的用户名
 */
exports.sendResetPassMail = function (who, token, name) {
    var from    = util.format('%s <%s>', 'TTT', config.mail_opts.auth.user);
    var to      = who;
    var subject = config.name + '社区帐号激活';
    var html = '<p>您好：' + name + '</p>' +
        '<p>我们收到您在' + config.name + '社区重置密码的请求，请在24小时内单击下面的链接来重置密码：</p>' +
        '<a href="' + SITE_ROOT_URL + '/reset_pass?key=' + token + '&name=' + name + '">重置密码链接</a>' +
        '<p>若您没有在' + config.name + '社区填写过注册信息，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>' +
        '<p>' + config.name + '社区 谨上。</p>';
    sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html
    });
};