const { EmbedBuilder } = require("discord.js")
const { developersIds } = require("../../Credentials/Config")
module.exports = (message, command, IsInteraction) => {
    if (!command.ownerOnly) return true;
    let user;
    if (IsInteraction) user = message.user
    else user = message.author

    if (developersIds.some(Id => user.id == Id)) return true;
    else {
        if (command.returnErrors == false || command.returnOwnerOnlyError == false) return false;
        else {
            const errorEmbed = new EmbedBuilder()
            .setTimestamp()
            .setColor("#FF0000")
            .setAuthor({
                name: user.tag,
                iconURL: user.displayAvatarURL({ dynamic: true })
            })
            .setDescription("You are not authorized to run this command as this command is reserved for the developers of this bot.");
            message.reply({
                embeds: [errorEmbed],
                allowedMentions: {
                    repliedUser: false
                }
            })
            return false;
        }
    }
}