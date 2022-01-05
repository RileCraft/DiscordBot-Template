module.exports = {
    name : 'evalbtn',
    returnNoErrors: true,
    ownerOnly: true,
    run : async(client, button, Discord) => {
        button.message.delete()
    }
}