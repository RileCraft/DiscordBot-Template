module.exports = {
    name: "evalbtn",
    ownerOnly: true,
    run: async(client, interaction) => {
        interaction.message.delete()
    }
};