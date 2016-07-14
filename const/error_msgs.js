/**
 * Created by test on 16/7/14.
 */
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