module.exports = {
    name: "CookieBox",
    run: async (DiscordClient, interaction) => {
        interaction.reply({
            content: "Here is your free cookie! 🍪"
        })
    }
}