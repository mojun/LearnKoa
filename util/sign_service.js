/**
 * Created by test on 16/7/28.
 */
"use strict";
const helper = require('../helpers/helper.js');
const config = require('../config/index.js');
const apiError = require('../const/error_msgs.js');
const _ = require('lodash');
const CONST = require('../const/index.js');

class Sign {
    /**
     * @param rawSign a=b&c=d
     * @return {*)
     */
    static *doSign(rawSign) {
        console.log("[sign][rawSign]", rawSign + CONST.SECRETS);
        if (rawSign)
            return helper.md5(rawSign + CONST.SECRETS);
        else
            return helper.md5(CONST.SECRETS);
    }

    /**
     *
     * @param data json
     * @returns {*}
     */
    static *encrypt(data) {
        return yield this.doSign(helper.querystring(data));
    }

    static *validate(data) {
        let _req = _.clone(data);
        let sign = _req.sign;
        delete _req.sign;
        let checkSign = yield this.encrypt(_req);
        console.log('[sign][validate][req_sign:%s][check_sign:%s]', sign, checkSign);
        if (checkSign === sign && checkSign) {
            return;
        } else {
            return helper.throwError(apiError.e400001);
        }
    }

}

module.exports = Sign;