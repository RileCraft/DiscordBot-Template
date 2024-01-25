import { fileReader } from "../../utils/fileReader.js";

export const SelectMenuManager = async(client, rootPath) => {
    const selectMenuFiles = fileReader(`${rootPath}/src/interactions/selectMenus`);

    for (const selectMenuFile of selectMenuFiles) {
        const selectMenu = (await import(selectMenuFile))?.Menu;

        if (!selectMenu) continue;
        if (!selectMenu.ignore && selectMenu.name) client.selectMenus?.set(selectMenu.name, selectMenu);
    };
};