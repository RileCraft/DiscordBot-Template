module.exports = async function(client) {
const Discord = require("discord.js")
const fs = require("fs")
const { FileArray } = require(`${ROOT.path}/Root/Functions/FileArray`)

FileArray(`${ROOT.path}/Root/Commands/Buttons`, async function(err, res) {
    res.forEach(file => {
        if (fs.statSync(file).isDirectory()) return;
        const button = require(file)
        client.commands.buttons.set(button.name, button)
    })
 })
}