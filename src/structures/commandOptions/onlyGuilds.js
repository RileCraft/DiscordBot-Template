import { EmbedBuilder } from "discord.js";

export const onlyGuildsFN = (client, message, command) => {
    if (!command.onlyGuilds || !Array.isArray(command.onlyGuilds) || !message.guild) return true;
    
    if (command.onlyGuilds.some((guildID) => message.guild?.id == guildID)) return true;
    else {
        if (command.returnErrors === false || command.returnOnlyGuildsError === false) return false;
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
                .setDescription(`The command you tried to execute cannot be ran in the current guild. Please execute the command in of these authorized guilds:\n${command.onlyGuilds.map((guildID) => `↳ <#${guildID}>`).join("\n")}`)
            ]
        });

        return false;
    };
};