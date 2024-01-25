import { EmbedBuilder } from "discord.js";

export const allUserPermissionsFN = (client, message, command) => {
    if (!command.allUserPermissions || !Array.isArray(command.allUserPermissions) || !message.guild) return true;
    const missingPermissions = message.member?.permissions.missing(command.allUserPermissions);
    if (!missingPermissions?.length) return true;
    else {
        if (command.returnErrors === false || command.returnAllUserPermissionsError === false) return false;
        message.channel.send({
            embeds: [
                new EmbedBuilder()
                .setColor("DarkRed")
                .setTimestamp()
                .setAuthor({
                    name: message.member.user.globalName ?? message.member.user.username,
                    iconURL: message.member.user.displayAvatarURL()
                })
                .setThumbnail(client.user.displayAvatarURL())
                 .setDescription(`You are missing the set permissions which are necessary to run this command. Please acquire these permissions to execute this command:\n${missingPermissions.map((permission) => `↳ \`${permission}\``).join("\n")}`)
            ]
        });
        
        return false;
    };
};