module.exports = {
    name: "evalbtn",
    ownerOnly: true,
    run: async(client, interaction, Discord) => {
        interaction.message.delete()
    }
}