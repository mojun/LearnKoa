/**
 * Created by test on 16/7/28.
 */

module.exports = function () {
    return function *(next) {
        yield *next;
    };
};