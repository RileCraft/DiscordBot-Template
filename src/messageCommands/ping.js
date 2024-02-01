export const MsgCommand = {
    name: "ping",
    aliases: ["pong"],
    run: (client, message) => {
        message.channel.send({
            content: `My ping is ${client.ws.ping}ms.`
        });
    }
}; // Simple ping message command.