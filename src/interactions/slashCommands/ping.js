export const Slash = {
    name: "ping",
    description: "Pong",
    run: (interaction, client) => {
        interaction.reply({
            content: `Ping is ${client.ws.ping}ms.`
        })
    }
}; // Simple /Ping command
