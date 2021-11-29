module.exports = async function(client) {
const Discord = require("discord.js")
const fs = require("fs")
const { FileArray } = require(`${ROOT.path}/Root/Functions/FileArray`)

FileArray(`${ROOT.path}/Root/Commands/Normal`, async function(err, res) {
    res.forEach(file => {
        if (fs.statSync(file).isDirectory()) return;
        const command = require(file)
        client.commands.normal.set(command.name.toLowerCase(), command)
        if (command.aliases) command.aliases.forEach(alias => {
            client.commands.normal.aliases.set(alias, command.name)
        })
    })
 })
}