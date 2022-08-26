module.exports = {
    name: "BasicInfoModal",
    run: async(DiscordClient, interaction) => {
        interaction.reply({
            content: "This is a correctly functioning modal."
        })
    }
}