import { EmbedBuilder } from "discord.js";

export default async(client, message, command) => {
    if (!command.anyUserPermissions || !message.guild || !Array.isArray(command.anyUserPermissions)) return true;
    if (command.anyUserPermissions.some(permission => message.member.permissions.toArray().includes(permission))) return true;
    else {
        if (command.returnErrors == false || command.returnAnyUserPermissionsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: message.member.user.globalName,
            iconURL: message.member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`You are missing any one of these permissions which are necessary to run this command. Please acquire any one of these permissions to execute this command:\n${command.anyUserPermissions.map(permission => `↳ \`${permission}\``).join("\n")}`);

        message.reply({
            embeds: [errorEmbed],
            allowedMentions: {
                repliedUser: false
            }
        });
        return false;
    };
};