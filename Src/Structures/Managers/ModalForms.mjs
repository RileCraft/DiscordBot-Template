import { statSync } from "fs";
import { glob } from "glob";
import { join } from "path";
import { pathToFileURL } from "url";

export default async(client, rootPath) => {
    const modalFormsFiles = await glob(`${rootPath}/Src/Interactions/ModalForms/**/*`);
    modalFormsFiles.forEach(async(modalFormFile) => {
        if (statSync(modalFormFile).isDirectory()) return;
        let modalForm = await import(pathToFileURL(join(rootPath, modalFormFile)));
        if (modalForm.default) modalForm = modalForm.default;
        if (modalForm.ignore || !modalForm.name || !modalForm.run) return;

        client.modalForms.set(modalForm.name, modalForm);
    });
};