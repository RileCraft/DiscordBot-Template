const glob = require('glob')
module.exports = (src, callback) => {
    glob(src + '/**/*', callback);
}