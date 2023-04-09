const directorySearch = require("node-recursive-directory");
const { REST, Routes } = require('discord.js');
const readFiles = require("../ReadAllFiles");
module.exports = async (client, rootPath) => {
    const globalSlashCommandsFiles = await directorySearch(`${rootPath}/Src/Interactions/SlashCommands/Global`);
    const allGuildsSlashCommandsFiles = readFiles(`${rootPath}/Src/Interactions/SlashCommands/Guilds`);
    const rest = new REST({ version: '10' }).setToken(client.token);

    if (globalSlashCommandsFiles?.length > 0) {
        let AGCOA = []; // All global commands as an array of objects.
        await globalSlashCommandsFiles.forEach(async globalFile => {
            const globalCommand = require(globalFile);
            if (!globalCommand.name || globalCommand.ignore || !globalCommand.run) return;
            await client.slashCommands.set(globalCommand.name, globalCommand);
            if (!globalCommand.description) AGCOA.push({
                name: globalCommand.name,
                type: globalCommand.type
            });
            else AGCOA.push({
                name: globalCommand.name,
                description: globalCommand.description,
                type: globalCommand.type,
                options: globalCommand?.options ?? []
            });
        });
        try {
            await rest.put(Routes.applicationCommands(client.application.id), { body: AGCOA });
        } catch (error) {
            console.log(error);
        }
    };
    if (allGuildsSlashCommandsFiles?.length > 0) {
        allGuildsSlashCommandsFiles.forEach(async(guild) => {
            let ASCOA = []; // All commands of this particular guild as an array of objects.
            const guildId = guild.flat(9999)[0].split(`${rootPath}/Src/Interactions/SlashCommands/Guilds`)[1].split("/")[1];
            await guild.flat(9999).forEach(async commandFile => {
                const guildCommand = require(commandFile);
                if (!guildCommand.name || guildCommand.ignore || !guildCommand.run) return;
                await client.slashCommands.set(guildCommand.name, guildCommand);
                if (!guildCommand.description) ASCOA.push({
                    name: guildCommand.name,
                    type: guildCommand.type
                });
                else ASCOA.push({
                    name: guildCommand.name,
                    description: guildCommand.description,
                    type: guildCommand.type,
                    options: guildCommand?.options ?? []
                });
            });
            try {
                await rest.put(Routes.applicationGuildCommands(client.application.id, guildId), { body: ASCOA });
            } catch (error) {
                console.log(error);
            }
        });
    };
};