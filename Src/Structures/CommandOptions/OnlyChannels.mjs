import { EmbedBuilder } from "discord.js";

export default async (client, message, command, isInteraction) => {
    if (!command.onlyChannels || !Array.isArray(command.onlyChannels)) return true;
    if (!command.allowInDms && !message.guild) return true;
    const user = isInteraction ? message.user : message.author;
    if (command.onlyChannels.some(channelId => message.channel.id == channelId)) return true;
    else {
        if (command.returnErrors == false || command.returnOnlyChannelsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: user.globalName,
            iconURL: user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`The command you tried to execute cannot be ran in the current channel. Please execute the command in of these authorized channels:\n${command.onlyChannels.map(channelId => `↳ <#${channelId}>`).join("\n")}`);

        message.reply({
            embeds: [errorEmbed],
            allowedMentions: {
                repliedUser: false
            }
        });
        return false;
    };
};