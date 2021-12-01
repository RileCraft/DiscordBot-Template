module.exports = async function(client) {
const Discord = require("discord.js")
const fs = require("fs")
const { FileArray } = require(`${ROOT.path}/Root/Functions/FileArray`)

FileArray(`${ROOT.path}/Root/Commands/Slash`, async function(err, res) {
	res.forEach(file => {
		if (fs.statSync(file).isDirectory()) return;
            let cmd = require(file)
            if (cmd.ignoreFile) return;
            client.commands.slash.set(cmd.name, cmd)
            })
    let promise = Promise.resolve()
    res.forEach(function(file) {
        promise = promise.then(function() {
            const interval = 5000
            if (fs.statSync(file).isDirectory()) return;
            let cmd = require(file)
            cmd = client.commands.slash.get(cmd.name)

            if (cmd.guilds && Array.isArray(cmd.guilds)) cmd.guilds.forEach(i => {
                const guild = client.guilds.cache.get(i)
                const cmdExists = guild.commands.cache.find(x => x.name == cmd.name)
                if (cmdExists) guild.commands.edit(cmdExists.id, {
                    name: cmd.name,
                    description: cmd.description ?? "No description.",
                    options: cmd.options ?? [],
                    type: cmd.type ?? "CHAT_INPUT"
                })
                else guild.commands.create({
                    name: cmd.name,
                    description: cmd.description ?? "No description.",
                    options: cmd.options ?? [],
                    type: cmd.type ?? "CHAT_INPUT"
                })
            })
            else {
                const cmdExists = client.application.commands.cache.find(x => x.name == cmd.name)
                if (cmdExists) client.application.commands.edit(cmdExists.id, {
                    name: cmd.name,
                    description: cmd.description ?? "No description.",
                    options: cmd.options ?? [],
                    type: cmd.type ?? "CHAT_INPUT"
                })
                else client.application.commands.create({
                    name: cmd.name,
                    description: cmd.description ?? "No description.",
                    options: cmd.options ?? [],
                    type: cmd.type ?? "CHAT_INPUT"
                })
            }

            return new Promise(function(resolve) {
                setTimeout(resolve, interval);
            })
        })
    })
 })
}