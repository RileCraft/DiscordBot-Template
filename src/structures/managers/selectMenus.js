import { fileReader } from "../../utils/fileReader.js";
import { pathToFileURL } from "node:url";

export const SelectMenuManager = async(client, rootPath) => {
    const selectMenuFiles = fileReader(`${rootPath}/src/interactions/selectMenus`);
    if (!selectMenuFiles.length) return;

    for (const selectMenuFile of selectMenuFiles) {
        const selectMenu = (await import(pathToFileURL(selectMenuFile).href))?.Menu;

        if (!selectMenu) continue;
        if (!selectMenu.ignore && selectMenu.name) client.selectMenus?.set(selectMenu.name, selectMenu);
    };
};