const { EmbedBuilder } = require("discord.js");
const { ownerIds } = require("../../Credentials/Config");
module.exports = async(client, message, command, isInteraction) => {
    if (!command.ownerOnly || typeof command?.ownerOnly != "boolean") return true;
    const user = isInteraction ? message.user : message.author;
    if (ownerIds.includes(user.id)) return true;
    else {
        if (command.returnErrors == false || command.returnOwnerOnlyError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription("The command you tried to run is __restricted__ for the developers of this bot and thus the command failed to execute.");

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    };
};