const fs = require("fs");
const Filer = require("../../Utils/Filer");
module.exports = async function(client, path) {
    Filer(`${path}/Src/Commands/MessageCommands`, async function(err, res) {
        res.forEach(file => {
            if (fs.statSync(file).isDirectory()) return;
            const command = require(file)
            if (command.ignoreFile) return;
            client.commands.messageCommands.set(command.name.toLowerCase(), command)
            if (command.aliases) command.aliases.forEach(alias => client.commands.messageCommands.aliases.set(alias.toLowerCase(), command.name.toLowerCase()))
        })
    })
}