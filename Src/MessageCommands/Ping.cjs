module.exports = {
    name: "ping",
    aliases: ["pong"],
    allowInDms: true,
    run: async(client, message) => {
        message.channel.send({
            content: `My ping is ${client.ws.ping}ms.`
        });
    }
};