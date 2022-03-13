const fs = require("fs");
const Filer = require("../../Utils/Filer");
module.exports = async function(client, path) {
    Filer(`${path}/Src/Commands/SelectMenus`, async function(err, res) {
        res.forEach(file => {
            if (fs.statSync(file).isDirectory()) return;
            const selectMenu = require(file)
            if (selectMenu.ignoreFile) return;
            client.commands.selectMenus.set(selectMenu.name, selectMenu)
        })
    })
}