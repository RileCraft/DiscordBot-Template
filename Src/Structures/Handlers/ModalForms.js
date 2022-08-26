const fs = require("fs");
const FileScanner = require('node-recursive-directory');

module.exports = async (DiscordClient, RootPath) => {
    const ScannedFiles = await FileScanner(`${RootPath}/Src/Interactions/Modals`)
        ScannedFiles.forEach(File => {
            if (fs.statSync(File).isDirectory()) return;
            const ModalForms = require(File)
            if (ModalForms.ignore) return;
            else DiscordClient.modalForms.set(ModalForms.name, ModalForms)
        });
}