import { glob } from "glob";
import { REST, Routes } from "discord.js";

export default async (client, rootPath) => {
    const globalSlashCommandsFiles = await glob(`${rootPath}/Src/Interactions/SlashCommands/Global/**/*.js`);
    const allGuilds = await glob(`${rootPath}/Src/Interactions/SlashCommands/Guilds/*`);
    const rest = new REST({ version: '10' }).setToken(client.token);

    if (globalSlashCommandsFiles ?.length > 0) {
        let AGCOA = []; // All global commands as an array of objects.
        for await (const globalFile of globalSlashCommandsFiles) {
            const globalCommand = await import(globalFile);
            if (!globalCommand.ignore) {
                if (globalCommand.name && globalCommand.run) {
                    await client.slashCommands.set(globalCommand.name, globalCommand);

                    if (!globalCommand.description) AGCOA.push({
                        name: globalCommand.name,
                        type: globalCommand.type
                    });
                    else AGCOA.push({
                        name: globalCommand.name,
                        description: globalCommand.description,
                        type: globalCommand.type,
                        options: globalCommand ?.options ?? []
                    });
                }
            }
        }
        try {
            await rest.put(Routes.applicationCommands(client.application.id), {
                body: AGCOA
            });
        } catch (error) {
            console.log(error);
        }
    };
    if (allGuilds ?.length > 0) {
        allGuilds.forEach(async (guild) => {
            let ASCOA = []; // All commands of this particular guild as an array of objects.
            const guildId = guild.split("Guilds")[1].slice(1).trim();
            if (isNaN(guildId)) return;
            const guildCommandFiles = await glob(`${rootPath}/Src/Interactions/SlashCommands/Guilds/${guildId}/**/*.js`);

            for await (const commandFile of guildCommandFiles) {
                const guildCommand = await import(commandFile);
                if (!guildCommand.ignore) {
                    if (guildCommand.name && guildCommand.run) {
                        await client.slashCommands.set(guildCommand.name, guildCommand);

                        if (!guildCommand.description) ASCOA.push({
                            name: guildCommand.name,
                            type: guildCommand.type
                        });
                        else ASCOA.push({
                            name: guildCommand.name,
                            description: guildCommand.description,
                            type: guildCommand.type,
                            options: guildCommand ?.options ?? []
                        });
                    }
                }
            }
            try {
                await rest.put(Routes.applicationGuildCommands(client.application.id, guildId), { body: ASCOA });
            } catch (error) {
                console.log(error);
            }
        });
    };
};