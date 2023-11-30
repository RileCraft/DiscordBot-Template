import { EmbedBuilder } from "discord.js";

export default async(client, message, command) => {
    if (!command.anyClientPermissions || !message.guild || !Array.isArray(command.anyClientPermissions)) return true;
    if (command.anyClientPermissions.some(permission => message.guild.members.me.permissions.toArray().includes(permission))) return true;
    else {
        if (command.returnErrors == false || command.returnAnyClientPermissionsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: message.member.user.globalName,
            iconURL: message.member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`The client is missing any one of these permissions which are necessary to run this command. Please provide the client any one of these permissions to execute this command:\n${command.anyClientPermissions.map(permission => `↳ \`${permission}\``).join("\n")}`);

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    };
};