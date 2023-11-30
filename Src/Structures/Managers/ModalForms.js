import { statSync } from "fs";
import { glob } from "glob";

export default async(client, rootPath) => {
    const modalFormsFiles = await glob(`${rootPath}/Src/Interactions/ModalForms/**/*`);
    modalFormsFiles.forEach(async(modalFormFile) => {
        if (statSync(modalFormFile).isDirectory()) return;
        const modalForm = await import(modalFormFile);
        
        if (modalForm.ignore || !modalForm.name || !modalForm.run) return;
        client.modalForms.set(modalForm.name, modalForm);
    });
};
