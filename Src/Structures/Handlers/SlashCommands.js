const fs = require("fs");
const FileScanner = require('node-recursive-directory');

module.exports = async (DiscordClient, RootPath) => {
    const ScannedFiles = await FileScanner(`${RootPath}/Src/Interactions/SlashCommands`)
    ScannedFiles.forEach(File => {
        if (fs.statSync(File).isDirectory()) return;
        const SlashCommand = require(File);
        if (SlashCommand.ignore) return;
        DiscordClient.slashCommands.set(SlashCommand.name, SlashCommand)
    })
    let promise = Promise.resolve()
    ScannedFiles.forEach(async function(File) {
        promise = promise.then(async function() {
            const interval = 5000;
            if (fs.statSync(File).isDirectory()) return;
            const slashCommand = require(File);
            if (slashCommand.ignore) return;
            
            if (slashCommand.guilds && Array.isArray(slashCommand.guilds)) slashCommand.guilds.forEach(guildID => {
                (async () => {
                const guild = DiscordClient.guilds.cache.get(guildID) ?? await DiscordClient.guilds.fetch(guildID)
                const verifier = guild.commands.cache.find(x => x.name == slashCommand.name)
                if (verifier) await guild.commands.edit(verifier.id, {
                    name: slashCommand.name,
                    description: slashCommand.description ?? "None",
                    options: slashCommand.options ?? [],
                    type: slashCommand.type
                })
                else await guild.commands.create({
                    name: slashCommand.name,
                    description: slashCommand.description ?? "None",
                    options: slashCommand.options ?? [],
                    type: slashCommand.type
                })
            })()
        })
            else {
                const verifier = DiscordClient.application.commands.cache.find(x => x.name == slashCommand.name)
                if (verifier) await DiscordClient.application.commands.edit(verifier.id, {
                    name: slashCommand.name,
                    description: slashCommand.description ?? "None.",
                    options: slashCommand.options ?? [],
                    type: slashCommand.type
                })
                else await DiscordClient.application.commands.create({
                    name: slashCommand.name,
                    description: slashCommand.description ?? "None.",
                    options: slashCommand.options ?? [],
                    type: slashCommand.type
                })
            }

            return new Promise(function(resolve) {
                setTimeout(resolve, interval);
            })
        })
    })
}