module.exports = {
    name: 'evalbtn', // Must be same as button's Custom Id
    authorOnly: true,
    run: async (client, interaction, Discord) => {
        interaction.message.delete()
    }
}