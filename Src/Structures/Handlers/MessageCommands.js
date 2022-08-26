const fs = require("fs");
const FileScanner = require('node-recursive-directory');

module.exports = async (DiscordClient, RootPath) => {
    const ScannedFiles = await FileScanner(`${RootPath}/Src/MessageCommands`)
        ScannedFiles.forEach(File => {
            if (fs.statSync(File).isDirectory()) return;
            const MessageCommand = require(File);
            if (MessageCommand.ignore) return;
            
            DiscordClient.messageCommands.set(MessageCommand.name, MessageCommand);
            if (MessageCommand.aliases) MessageCommand.aliases.forEach(Alias => {
                DiscordClient.messageCommands_Aliases.set(Alias, MessageCommand.name);
            });
        });
}