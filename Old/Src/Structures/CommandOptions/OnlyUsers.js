const { EmbedBuilder } = require("discord.js");

module.exports = async (client, message, command, isInteraction) => {
    if (!command.onlyUsers || !Array.isArray(command.onlyUsers)) return true;
    const user = isInteraction ? message.user : message.author;
    if (command.onlyUsers.some(userId => user.id == userId)) return true;
    else {
        if (command.returnErrors == false || command.returnOnlyUsersError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`The command you tried to execute couldn't be ran as you are not one of the authorized users.`);

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    }
};