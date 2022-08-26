const { EmbedBuilder, ApplicationCommandType } = require("discord.js")
module.exports = {
    name: "ping",
    type: ApplicationCommandType.ChatInput,
    description: "Bot's latency.",
    run: async(DiscordClient, interaction) => {
        const ping = new EmbedBuilder()
		.setColor('#FF0000')
		.setTimestamp()
		.setTitle('🏓╎ Pong!')
		.setDescription(`🏠╎Websocket Latency: ${DiscordClient.ws.ping}ms\n🤖╎Bot Latency: ${Date.now() - interaction.createdTimestamp}ms`);
		interaction.reply({
            embeds: [ping]
        })
    }
}