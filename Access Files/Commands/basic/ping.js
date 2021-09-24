const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    usage: "nom ping",
description: "Shows the latency of the Bot and the Websocket.",
    run : async(client, message, args) => {
    	let b = Date.now()
        db.get(message.author.id + "_key")
        let c = Date.now()
        const a = Math.floor(c - b)
        const ping = new MessageEmbed()
	.setColor('RANDOM')
	.setTimestamp()
        .setTitle('🏓╎Pong!')
	.setDescription('🏠╎Websocket Latency:' + " " + client.ws.ping + "ms" + '\n🤖╎Bot Latency:' + " " + `${Date.now() - message.createdTimestamp}` + "ms" + "\n" + "🎲╎Database Ping: " + a + "ms");
	message.channel.send(ping)
    }
}
