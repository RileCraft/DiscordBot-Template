const { EmbedBuilder } = require("discord.js");

module.exports = async(client, message, command, isInteraction) => {
    if (!command.allClientPermissions || !Array.isArray(command.allClientPermissions || !message.guild)) return true;
    const user = isInteraction ? message.user : message.author;
    if (command.allClientPermissions.every(permission => message.guild.members.me.permissions.toArray().includes(permission))) return true;
    else {
        if (command.returnErrors == false || command.returnAllClientPermissionsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`The client is missing the set permissions which are necessary to run this command. Please provide the client these permissions to execute this command:\n${command.allClientPermissions.map(permission => `↳ \`${permission}\``).join("\n")}`);

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    }
};