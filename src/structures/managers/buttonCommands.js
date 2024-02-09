import { fileReader } from "../../utils/fileReader.js";

export const ButtonManager = async(client, rootPath) => {
    const buttonCommandFiles = fileReader(`${rootPath}/src/interactions/buttons`);
    if (!buttonCommandFiles.length) return;

    for (const buttonCommandFile of buttonCommandFiles) {
        const buttonCommand = (await import(`file:///${buttonCommandFile}`))?.Button;
        if (!buttonCommand) continue;

        if (!buttonCommand.ignore && buttonCommand.name) client.buttonCommands.set(buttonCommand.name, buttonCommand);
    };
};