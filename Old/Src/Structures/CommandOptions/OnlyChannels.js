const { EmbedBuilder } = require("discord.js");

module.exports = async (client, message, command) => {
    if (!command.onlyChannels || !Array.isArray(command.onlyChannels || !message.guild)) return true;
    const member = message.member;
    if (command.onlyChannels.some(channelId => message.channel.id == channelId)) return true;
    else {
        if (command.returnErrors == false || command.returnOnlyChannelsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: member.user.tag,
            iconURL: member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`The command you tried to execute cannot be ran in the current channel. Please execute the command in of these authorized channels:\n${command.onlyChannels.map(channelId => `↳ <#${channelId}>`).join("\n")}`);

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    }
};