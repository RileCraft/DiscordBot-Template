const { ApplicationCommandType } = require("discord.js");
module.exports = {
    name: "ping",
    type: ApplicationCommandType.ChatInput,
    description: "Pong",
    run: async (client, interaction) => {
        interaction.reply({
            content: `Ping is ${client.ws.ping}ms.`
        })
    }
}