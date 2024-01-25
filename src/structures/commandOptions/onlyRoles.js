import { EmbedBuilder } from "discord.js";

export const onlyRolesFN = (client, message, command) => {
    if (!command.onlyRoles || !Array.isArray(command.onlyRoles) || !message.guild) return true;
    
    if (command.onlyRoles.some((roleID) => message.member?.roles.cache.has(roleID))) return true;
    else {
        if (command.returnErrors === false || command.returnOnlyRolesError === false) return false;
        message.channel.send({
            embeds: [
                new EmbedBuilder()
                .setColor("DarkRed")
                .setTimestamp()
                .setAuthor({
                    name: message.member?.user.globalName ?? message.member?.user.username ?? "",
                    iconURL: message.member?.user.displayAvatarURL()
                })
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(`The command you tried to execute couldn't be executed as you are missing one of these required roles:\n${command.onlyRoles.map((roleID) => `↳ <#${roleID}>`).join("\n")}`)
            ]
        });

        return false;
    };
};