import config from "../Config.mjs";

export const name = "messageCreate";
export async function run(message, client) {
    if (!Array.isArray(config.prefix)) return;
    config.prefix.forEach(async(botPrefix) => {
        if (!message.content.startsWith(botPrefix)) return;
        const commandName = message.content.toLowerCase().slice(botPrefix.length).trim().split(" ")[0];
        const command = client.messageCommands.get(commandName) ?? client.messageCommands.get(client.messageCommands_Aliases.get(commandName));
        if (!command) return;
        const args = message.content.slice(botPrefix.length).trim().slice(commandName.length).trim().split(" ");

        if (command.allowInDms) return await command.run(client, message, args);
        else if (!message.guild) return;
        else if (command.allowBots) return await command.run(client, message, args);
        else if (message.author.bot) return;
        else await command.run(client, message, args);
    });
}
