import { EmbedBuilder } from "discord.js";

export const anyClientPermissionsFN = (client, message, command) => {
    if (!command.anyClientPermissions || !Array.isArray(command.anyClientPermissions) || !message.guild) return true;
    if (command.anyClientPermissions.some((permission) => message.guild?.members.me?.permissions.has(permission))) return true;
    else {
        if (command.returnErrors === false || command.returnAnyClientPermissionsError === false) return false;
        message.channel.send({
            embeds: [new EmbedBuilder()
                .setColor("DarkRed")
                .setTimestamp()
                .setAuthor({
                    name: message.member.user.globalName ?? message.member.user.username,
                    iconURL: message.member.user.displayAvatarURL()
                })
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`The client is missing any one of these permissions which are necessary to run this command. Please provide the client any one of these permissions to execute this command:\n${command.anyClientPermissions.map((permission) => `↳ \`${permission}\``).join("\n")}`)
            ]
        });

        return false;
    };
};