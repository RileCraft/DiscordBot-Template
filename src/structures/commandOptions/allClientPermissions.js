import { EmbedBuilder } from "discord.js";

export const allClientPermissionsFN = (client, message, command) => {
    if (!command.allClientPermissions || !Array.isArray(command.allClientPermissions) || !message.guild) return true;
    const missingPermissions = message.guild?.members?.me?.permissions.missing(command.allClientPermissions);
    if (!missingPermissions?.length) return true;
    else {
        if (command.returnErrors === false || command.returnAllClientPermissionsError === false) return false;
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
              .setDescription(`The client is missing the set permissions which are necessary to run this command. Please provide the client these permissions to execute this command:\n${missingPermissions.map((permission) => `↳ \`${permission}\``).join("\n")}`)
            ]
          });

        return false;
    };
};