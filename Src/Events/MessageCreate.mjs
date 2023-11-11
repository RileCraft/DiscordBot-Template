import { prefix } from "../Config.mjs";
import commandOptionsChecker from "../Structures/CommandOptions/Processor.mjs";

export const name = "messageCreate";
export async function run(message, client, rootPath) {
    if (!Array.isArray(config.prefix)) return;
    prefix.forEach(async(botPrefix) => {
        if (!message.content.startsWith(botPrefix)) return;
        const commandName = message.content.toLowerCase().slice(botPrefix.length).trim().split(" ")[0];
        const command = client.messageCommands.get(commandName) ?? client.messageCommands.get(client.messageCommands_Aliases.get(commandName));
        if (!command) return;
        const args = message.content.slice(botPrefix.length).trim().slice(commandName.length).trim().split(" ");
        const processedCommandOptionsChecker = await commandOptionsChecker(client, message, command, false, "MessageCommand");

        if (command.allowInDms) return processedCommandOptionsChecker ? await command.run(client, message, args, rootPath) : 1;
        else if (!message.guild) return;
        else if (command.allowBots) return processedCommandOptionsChecker ? await command.run(client, message, args, rootPath) : 1;
        else if (message.author.bot) return;
        else return processedCommandOptionsChecker ? await command.run(client, message, args, rootPath) : 1;
    });
}
