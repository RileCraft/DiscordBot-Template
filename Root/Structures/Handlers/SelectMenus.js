const fs = require("fs");
const Filer = require("../../Utils/Filer");
module.exports = async function(client) {
    Filer(`${ROOT.path}/Root/Commands/SelectMenus`, async function(err, res) {
        res.forEach(file => {
            if (fs.statSync(file).isDirectory()) return;
            const selectMenu = require(file)
            client.commands.selectMenus.set(selectMenu.name, selectMenu)
        })
    })
}