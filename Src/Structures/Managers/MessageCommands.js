const { statSync } = require("node:fs");
const directorySearch = require("node-recursive-directory");

module.exports = async(client, rootPath) => {
    const messageCommandsFiles = await directorySearch(`${rootPath}/Src/MessageCommands`);
    messageCommandsFiles.forEach(messageCommandFile => {
        if (statSync(messageCommandFile).isDirectory()) return;
        const messageCommand = require(messageCommandFile);
        if (messageCommand.ignore || !messageCommand.name || !messageCommand.run) return;

        client.messageCommands.set(messageCommand.name, messageCommand);
        if (messageCommand.aliases && Array.isArray(messageCommand.aliases)) messageCommand.aliases.forEach(messageCommandAlias => {
            client.messageCommandsAliases.set(messageCommandAlias, messageCommand.name);
        });
    });
};