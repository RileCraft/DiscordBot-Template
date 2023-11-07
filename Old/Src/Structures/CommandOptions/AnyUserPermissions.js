const { EmbedBuilder } = require("discord.js");

module.exports = async(client, message, command) => {
    if (!command.anyUserPermissions || !message.guild || !Array.isArray(command.anyUserPermissions) || !message.guild) return true;
    const member = message.member;
    if (command.anyUserPermissions.some(permission => member.permissions.toArray().includes(permission))) return true;
    else {
        if (command.returnErrors == false || command.returnAnyUserPermissionsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: member.user.tag,
            iconURL: member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`You are missing any one of these permissions which are necessary to run this command. Please acquire any one of these permissions to execute this command:\n${command.anyUserPermissions.map(permission => `↳ \`${permission}\``).join("\n")}`);

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    }
};