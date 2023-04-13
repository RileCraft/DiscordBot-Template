const { prefix } = require("../Credentials/Config");
const commandOptionsProcessor = require("../Structures/CommandOptions/Processor");
module.exports = {
    name: "messageCreate",
    run: async(message, client) => {
        if (!Array.isArray(prefix)) return;
        prefix.forEach(async botPrefix => {
            if (!message.content.startsWith(botPrefix)) return;
            const commandName = message.content.toLowerCase().slice(botPrefix.length).trim().split(" ")[0];
            const command = client.messageCommands.get(commandName) ?? client.messageCommands.get(client.messageCommandsAliases.get(commandName));
            if (!command) return;
            const args = message.content.slice(botPrefix.length).trim().slice(commandName.length).trim().split(" ");
            const authenticatedCMDOptions = await commandOptionsProcessor(client, message, command, false, "MessageCommand");
            
            if (command.allowInDms) {
                if (authenticatedCMDOptions) return await command.run(client, message, args);
            } else if (!message.guild) return;
            else if (command.allowBots) {
                if (authenticatedCMDOptions) return await command.run(client, message, args);
            } else if (message.author.bot) return;
            else if (authenticatedCMDOptions) return await command.run(client, message, args);
        });
    }
};
