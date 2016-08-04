/**
 * Created by test on 16/7/28.
 */
module.exports = ()=> {
    return function *(next) {
        this._json = this.method === 'GET' ? this.query : this.request.body;
        console.log('[request][process: %s][access][r_id: %s][uri: %s][method: %s][content: %j]', process.pid,
            this.requestId, this.request.url, this.method, this._json);
        yield *next;
    }
};