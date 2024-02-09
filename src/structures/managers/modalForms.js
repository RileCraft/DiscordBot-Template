import { fileReader } from "../../utils/fileReader.js";

export const ModalManager = async(client, rootPath) => {
    const modalFormFiles = fileReader(`${rootPath}/src/interactions/modalForms`);
    if (!modalFormFiles.length) return;

    for (const modalFormFile of modalFormFiles) {
        const modalForm = (await import(`file:///${modalFormFile}`))?.Modal;
        
        if (!modalForm) continue;
        if (!modalForm.ignore && modalForm.name) client.modalForms.set(modalForm.name, modalForm);
    };
};