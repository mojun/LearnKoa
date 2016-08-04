/**
 * Created by test on 16/7/14.
 */

var UserController = require('../controllers/users_c.js');
module.exports = function (router) {

    router.post('/users/signup', UserController.signup);
    router.post('/users/login', UserController.login);
    router.get('/', function *() {
        this.body = {"code": 1, "msg": "你已经连接到IM服务器", "data":{}};
    });
};