module.exports = {
    name : 'evalbtn',
    returnErrors: false,
    ownerOnly: true,
    run : async(client, interaction) => {
        interaction.message.delete()
    }
}