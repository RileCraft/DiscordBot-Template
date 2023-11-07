const { statSync } = require("node:fs");
const directorySearch = require("node-recursive-directory");

module.exports = async(client, rootPath) => {
    const modalFormsFiles = await directorySearch(`${rootPath}/Src/Interactions/ModalForms`);
    modalFormsFiles.forEach(modalFormFile => {
        if (statSync(modalFormFile).isDirectory()) return;
        const modalForm = require(modalFormFile);
        if (modalForm.ignore || !modalForm.name || !modalForm.run) return;

        client.modalForms.set(modalForm.name, modalForm);
    });
};