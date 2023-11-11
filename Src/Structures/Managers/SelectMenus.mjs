import { statSync } from "fs";
import { glob } from "glob";

export default async(client, rootPath) => {
    const selectMenuFiles = await glob(`${rootPath}/Src/Interactions/SelectMenus/**/*`);
    selectMenuFiles.forEach(async(selectMenuFile) => {
        if (statSync(selectMenuFile).isDirectory()) return; 
        let selectMenuCommand = await import(selectMenuFile);
        if (selectMenuCommand.default) selectMenuCommand = selectMenuCommand.default; // Support for CommonJS
        if (selectMenuCommand.ignore || !selectMenuCommand.name || !selectMenuCommand.run) return;

        client.selectMenus.set(selectMenuCommand.name, selectMenuCommand);
    });
};
