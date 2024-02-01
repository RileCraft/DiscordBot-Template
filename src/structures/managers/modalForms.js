import { fileReader } from "../../utils/fileReader.js";
import { pathToFileURL } from "node:url";

export const ModalManager = async(client, rootPath) => {
    const modalFormFiles = fileReader(`${rootPath}/src/interactions/modalForms`);
    if (!modalFormFiles.length) return;

    for (const modalFormFile of modalFormFiles) {
        const modalForm = (await import(pathToFileURL(modalFormFile).href))?.Modal;
        
        if (!modalForm) continue;
        if (!modalForm.ignore && modalForm.name) client.modalForms.set(modalForm.name, modalForm);
    };
};