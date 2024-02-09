import { fileReader } from "../../utils/fileReader.js";

export const MessageCMDManager = async(client, rootPath) => {
    const messageCommandsFiles = fileReader(`${rootPath}/src/messageCommands`);
    if (!messageCommandsFiles.length) return;

    for (const messageCommandFile of messageCommandsFiles) {
        const messageCommand = (await import(`file:///${messageCommandFile}`))?.MsgCommand;

        if (!messageCommand) continue;

        if (!messageCommand.ignore && messageCommand.name) client.messageCommands.set(messageCommand.name.toLowerCase(), messageCommand);
        if (!messageCommand.ignore && messageCommand.aliases && Array.isArray(messageCommand.aliases)) messageCommand.aliases.forEach((messageCommandAlias) => {
            client.messageCommands_Aliases.set(messageCommandAlias, messageCommand.name);
        });
    };
};