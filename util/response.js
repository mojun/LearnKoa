/**
 * Created by test on 16/8/1.
 */
const CONST = require('../const/index.js');
module.exports = function *() {
    var data = arguments[0] || [];
    var response = CONST.RESPONSE.SUCCESS;
    response.data = data;
    this.body = response;
};