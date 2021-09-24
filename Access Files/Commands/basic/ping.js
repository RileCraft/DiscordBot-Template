module.exports = {
    name : 'ping',
    run : async(client, message, args, MessageEmbed) => {
        const ping = new MessageEmbed()
	.setColor('RANDOM')
	.setTimestamp()
        .setTitle('🏓╎Pong!')
	.setDescription('🏠╎Websocket Latency:' + " " + client.ws.ping + "ms" + '\n🤖╎Bot Latency:' + " " + `${Date.now() - message.createdTimestamp}` + "ms" + "\n" + "🎲╎Database Ping: " + a + "ms");
	message.channel.send(ping)
    }
}
