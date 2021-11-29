const glob = require('glob')
module.exports = {
    FileArray(src, callback) {
        glob(src + '/**/*', callback);
    }
}