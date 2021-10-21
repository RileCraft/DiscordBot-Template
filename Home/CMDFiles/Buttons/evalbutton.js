module.exports = {
    name: 'evalbtn', // Must be same as button's Custom Id
    ownerOnly: true,
    run: async (client, interaction, Discord) => {
        interaction.message.delete()
    }
}