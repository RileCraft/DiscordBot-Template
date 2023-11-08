import { statSync } from "fs";
import { glob } from "glob";
import { join } from "path";
import { pathToFileURL } from "url";
import { REST, Routes } from "discord.js";

export default async(client, rootPath) => {
    const globalSlashCommandsFiles = await glob(`${rootPath}/Src/Interactions/SlashCommands/Global/**/*`);
    const allGuildsSlashCommands = await glob(`${rootPath}/Src/Interactions/SlashCommands/Guilds/*`);
    const rest = new REST({ version: '10' }).setToken(client.token);

    if (globalSlashCommandsFiles?.length > 0) {
        let AGCOA = []; // All global commands as an array of objects.
        for (const globalFile of globalSlashCommandsFiles) {
            if (statSync(globalFile).isDirectory()) return;
            let globalCommand = await import(pathToFileURL(join(rootPath, globalFile)));
            if (globalCommand.default) globalCommand = globalCommand.default; // Support for CommonJS
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
        }
        try {
            await rest.put(Routes.applicationCommands(client.application.id), { body: AGCOA });
        } catch (error) {
            console.log(error);
        }
    };
    if (allGuildsSlashCommands?.length > 0) {
        let ASCOA = []; // All commands of this particular guild as an array of objects.
        allGuildsSlashCommands.forEach(async(guild) => {
            const guildId = guild.split("Guilds")[1].slice(1).trim();
            const guildCommandFiles = await glob(`${rootPath}/Src/Interactions/SlashCommands/Guilds/${guildId}/**/*`);

            for (const commandFile of guildCommandFiles) {
                let guildCommand = await import(pathToFileURL(join(rootPath, commandFile)));
                if (guildCommand.default) guildCommand = guildCommand.default; // Support for CommonJS
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
            }
            try {
                await rest.put(Routes.applicationGuildCommands(client.application.id, guildId), { body: ASCOA });
            } catch (error) {
                console.log(error);
            }
        });
    };
};