const { prefix } = require("../Credentials/Config");
const commandOptionsProcessor = require("../Structures/CommandOptions/Processor");
module.exports = {
    name: "messageCreate",
    run: async(message, client) => {
        if (!Array.isArray(prefix) && !message.content.startsWith(prefix)) return;
        prefix.forEach(async botPrefix => {
            const commandName = message.content.toLowerCase().slice(botPrefix.length).trim().split(" ")[0];
            const command = client.messageCommands.get(commandName) ?? client.messageCommands.get(client.messageCommandsAliases.get(commandName));
            if (!command) return;
            const args = message.content.slice(botPrefix.length).trim().slice(commandName.length).trim().split(" ");

            if (!message.guild || message.author.bot) return;
            const authenticatedCMDOptions = await commandOptionsProcessor(client, message, command, false, "MessageCommand");
            if (authenticatedCMDOptions) return await command.run(client, message, args);
        });
    }
};