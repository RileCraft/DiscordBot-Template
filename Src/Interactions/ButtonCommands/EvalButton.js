module.exports = {
    name : 'evalbtn',
    returnErrors: false,
    onlyChannels: ["705681477169315863", "828470909751787600"],
    ownerOnly: true,
    run : async(client, interaction) => {
        interaction.message.delete()
    }
}