module.exports = {
    name: "Ping",
    aliases: ["ping"],
    run: async(client, message, args) => {
        message.channel.send("pong!")
    }
}