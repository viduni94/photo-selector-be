const to = (promise) => promise.then(res => [null, res]).catch(err => [err]);

module.exports = to;
