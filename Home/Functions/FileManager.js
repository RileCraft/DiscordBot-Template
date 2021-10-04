const glob = require('glob')
module.exports = {
 FileManager (src, callback) {
  glob(src + '/**/*', callback);
}
	}