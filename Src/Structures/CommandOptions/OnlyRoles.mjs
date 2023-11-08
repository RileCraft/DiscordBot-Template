import { EmbedBuilder } from "discord.js";

export default async (client, message, command) => {
    if (!command.onlyRoles || !Array.isArray(command.onlyRoles || !message.guild)) return true;
    if (command.onlyRoles.some(roleId => message.member.roles.cache.has(roleId))) return true;
    else {
        if (command.returnErrors == false || command.returnOnlyRolesError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: message.member.user.globalName,
            iconURL: message.member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`The command you tried to execute couldn't be executed as you are missing one of these required roles:\n${command.onlyRoles.map(roleId => `↳ <@&${roleId}>`).join("\n")}`);

        message.reply({
            embeds: [errorEmbed],
            allowedMentions: {
                repliedUser: false
            }
        });
        return false;
    }
};