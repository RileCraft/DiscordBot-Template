import { statSync } from "fs";
import { glob } from "glob";
import { join } from "path";
import { pathToFileURL } from "url";

export default async(client, rootPath) => {
    const messageCommandsFiles = await glob(`${rootPath}/Src/MessageCommands/**/*`);
    messageCommandsFiles.forEach(async(messageCommandFile) => {
        if (statSync(messageCommandFile).isDirectory()) return;
        let messageCommand = await import(pathToFileURL(join(rootPath, messageCommandFile)));
        if (messageCommand.default) messageCommand = messageCommand.default; // Support for CommonJS
        if (messageCommand.ignore || !messageCommand.name || !messageCommand.run) return;

        client.messageCommands.set(messageCommand.name.toLowerCase(), messageCommand);
        if (messageCommand.aliases && Array.isArray(messageCommand.aliases)) messageCommand.aliases.forEach(messageCommandAlias => {
            client.messageCommands_Aliases.set(messageCommandAlias, messageCommand.name);
        });
    });
};