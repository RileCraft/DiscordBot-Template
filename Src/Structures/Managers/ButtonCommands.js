const { statSync } = require("node:fs");
const directorySearch = require("node-recursive-directory");

module.exports = async(client, rootPath) => {
    const buttonCommandFiles = await directorySearch(`${rootPath}/Src/Interactions/Buttons`);
    buttonCommandFiles.forEach(buttonCommandFile => {
        if (statSync(buttonCommandFile).isDirectory()) return;
        const buttonCommand = require(buttonCommandFile);
        if (buttonCommand.ignore || !buttonCommand.name || !buttonCommand.run) return;

        client.buttonCommands.set(buttonCommand.name, buttonCommand);
    });
};