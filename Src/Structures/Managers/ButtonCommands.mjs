import { statSync } from "fs";
import { glob } from "glob";
import { join } from "path";
import { pathToFileURL } from "url";

export default async(client, rootPath) => {
    const buttonCommandFiles = await glob(`${rootPath}/Src/Interactions/Buttons/**/*`);
    buttonCommandFiles.forEach(async(buttonCommandFile) => {
        if (statSync(buttonCommandFile).isDirectory()) return;
        let buttonCommand = await import(pathToFileURL(join(rootPath, buttonCommandFile)));
        if (buttonCommand.default) buttonCommand = buttonCommand.default;
        if (buttonCommand.ignore || !buttonCommand.name || !buttonCommand.run) return;

        client.buttonCommands.set(buttonCommand.name, buttonCommand);
    });
};