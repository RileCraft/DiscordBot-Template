const { EmbedBuilder } = require("discord.js");

module.exports = async (client, message, command) => {
    if (!command.onlyRoles || !Array.isArray(command.onlyRoles || !message.guild)) return true;
    const member = message.member;
    if (command.onlyRoles.some(roleId => member.roles.cache.has(roleId))) return true;
    else {
        if (command.returnErrors == false || command.returnOnlyRolesError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: member.user.tag,
            iconURL: member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`The command you tried to execute couldn't be executed as you are missing one of these required roles:\n${command.onlyRoles.map(roleId => `↳ <@&${roleId}>`).join("\n")}`);

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    }
};