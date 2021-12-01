module.exports = {
	name: "ping",
	guilds: ["705681476674650143"],
	userPermissions: ["MANAGE_CHANNELS"],
	description: "Run this to see my ping.",
	run: async(client, interaction, Discord) => {
        const ping = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTimestamp()
        .setTitle('🏓╎Pong!')
	.setDescription(`🏠╎Websocket Latency: ${client.ws.ping}ms\n🤖╎Bot Latency: ${Date.now() - interaction.createdTimestamp}ms`);
	interaction.reply({ embeds: [ping] })
		}
	}