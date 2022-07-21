const fs = require("fs");
const Filer = require("../../Utils/Filer");
const { ApplicationCommandType } = require('discord.js');
module.exports = async function(client, path) {
    Filer(`${path}/Src/Commands/SlashCommands`, async function(err, res) {
        res.forEach(file => {
            if (fs.statSync(file).isDirectory()) return;
            const cmd = require(file);
            if (cmd.ignoreFile) return;
            client.commands.slashCommands.set(require(file).name, require(file))
        })
        let promise = Promise.resolve()
        res.forEach(async function(file) {
            promise = promise.then(async function() {
                const interval = 5000;
                if (fs.statSync(file).isDirectory()) return;
                const cmd = require(file);
                if (cmd.ignoreFile) return;
                
                if (cmd.guilds && Array.isArray(cmd.guilds)) cmd.guilds.forEach(guildID => {
                    (async () => {
                    const guild = client.guilds.cache.get(guildID) ?? await client.guilds.fetch(guildID)
                    const verifier = guild.commands.cache.find(x => x.name == cmd.name)
                    if (verifier) await guild.commands.edit(verifier.id, {
                        name: cmd.name,
                        description: cmd.description ?? "None",
                        options: cmd.options ?? [],
                       type: cmd.type ?? ApplicationCommandType.ChatInput,
                    })
                    else await guild.commands.create({
                        name: cmd.name,
                        description: cmd.description ?? "None",
                        options: cmd.options ?? [],
                       type: cmd.type ?? ApplicationCommandType.ChatInput,
                    })
                })()
            })
                else {
                    const verifier = client.application.commands.cache.find(x => x.name == cmd.name)
                    if (verifier) await client.application.commands.edit(verifier.id, {
                        name: cmd.name,
                        description: cmd.description ?? "None.",
                        options: cmd.options ?? [],
                       type: cmd.type ?? ApplicationCommandType.ChatInput,
                    })
                    else await client.application.commands.create({
                        name: cmd.name,
                        description: cmd.description ?? "None.",
                        options: cmd.options ?? [],
                       type: cmd.type ?? ApplicationCommandType.ChatInput,
                    })
                }

                return new Promise(function(resolve) {
                    setTimeout(resolve, interval);
                })
            })
        })
    })
}