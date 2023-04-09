const { EmbedBuilder } = require("discord.js");
const { guildCooldownDB } = require("../../../bot");
module.exports = async(client, message, command, _, interactionType) => {
    if (!command.guildCooldown || isNaN(command.guildCooldown) || !message.guild.id) return true;
    const member = message.member;
    const currentTime = Date.now();
    const oldTime = await guildCooldownDB.get(`${message.guild.id}.${interactionType}.${command.name}.${member.user.id}`);
    if (Math.floor(currentTime - (oldTime ?? 0)) >= command.guildCooldown || isNaN(oldTime)) {
        await guildCooldownDB.set(`${message.guild.id}.${interactionType}.${command.name}.${member.user.id}`, currentTime);
        return true;
    } else {
        if (command.returnErrors == false || command.returnGuildCooldownError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: member.user.tag,
            iconURL: member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`You are currently at cooldown. Please try again in <t:${Math.floor(Math.floor(oldTime + command.guildCooldown) / 1000)}:R>.`);

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    };
};