const fs = require('node:fs');;

module.exports = function readFiles(dir, filesList = []) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    if (!files) return;
    files.forEach((file) => {
        const filePath = `${dir}/${file}`;
        if (fs.statSync(filePath).isDirectory()) {
            filesList.push(readFiles(filePath));
        } else {
            filesList.push(filePath);
        }
    });
    return filesList;
};