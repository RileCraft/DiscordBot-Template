const fs = require("fs");
const FileScanner = require('node-recursive-directory');

module.exports = async (DiscordClient, RootPath) => {
    const ScannedFiles = await FileScanner(`${RootPath}/Src/Interactions/SelectMenus`)
        ScannedFiles.forEach(File => {
            if (fs.statSync(File).isDirectory()) return;
            const SelectMenu = require(File)
            if (SelectMenu.ignore) return;
            else DiscordClient.selectMenus.set(SelectMenu.name, SelectMenu)
        });
}