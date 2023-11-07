const { statSync } = require("node:fs");
const directorySearch = require("node-recursive-directory");

module.exports = async(client, rootPath) => {
    const selectMenuFiles = await directorySearch(`${rootPath}/Src/Interactions/SelectMenus`);
    selectMenuFiles.forEach(selectMenuFile => {
        if (statSync(selectMenuFile).isDirectory()) return;
        const selectMenuCommand = require(selectMenuFile);
        if (selectMenuCommand.ignore || !selectMenuCommand.name || !selectMenuCommand.run) return;

        client.selectMenus.set(selectMenuCommand.name, selectMenuCommand);
    });
};