import { statSync } from "fs";
import { glob } from "glob";

export default async(client, rootPath) => {
    const buttonCommandFiles = await glob(`${rootPath}/Src/Interactions/Buttons/**/*`);
    buttonCommandFiles.forEach(async(buttonCommandFile) => {
        if (statSync(buttonCommandFile).isDirectory()) return;
        let buttonCommand = await import(buttonCommandFile);
        if (buttonCommand.default) buttonCommand = buttonCommand.default; // Support for CommonJS
        if (buttonCommand.ignore || !buttonCommand.name || !buttonCommand.run) return;

        client.buttonCommands.set(buttonCommand.name, buttonCommand);
    });
};
