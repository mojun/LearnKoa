/**
 * Created by test on 16/7/14.
 */

exports.e200005 = {
    code: -1,
    message: '输入密码有误.',
    status: 401
};

exports.e200006 = {
    code: -1,
    message: '邮箱没有被注册.',
    status: 401
};

exports.e200007 = {
    code: -1,
    message: '邮箱已经被使用.',
    status: 401
};

exports.e200008 = {
    code: -1,
    message: '两次密码输入不一致.',
    status: 401
};

exports.e200009 = {
    code: -1,
    message: '用户名密码错误.',
    status: 401
};
exports.e200010 = {
    code: -1,
    message: '请填写正确的用户名或密码.',
    status: 401
};

exports.e500000 = {
    cd: -1,
    msg: '服务器故障,请稍后尝试',
    status: 500
};

exports.e500001 = {
    cd: -1,
    msg: '第三方服务器故障,请稍后尝试',
    status: 503
};

exports.e400000 = {
    cd: -1,
    msg: '缺少必要参数',
    status: 400
};

exports.e400001 = {
    cd: -1,
    msg: '数据签名错误,非法请求',
    status: 403
};