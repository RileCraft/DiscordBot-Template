export const Slash = {
    name: "ping",
    description: "Pong",
    guilds: ["1186230608851120188"],
    run: (interaction, client) => {
        interaction.reply({
            content: `Ping is ${client.ws.ping}ms.`
        })
    }
}; // Simple /Ping command
