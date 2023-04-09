const { EmbedBuilder } = require("discord.js");
const { globalCooldownDB } = require("../../../bot");
module.exports = async(client, message, command, isInteraction, interactionType) => {
    if (!command.globalCooldown || isNaN(command.globalCooldown)) return true;
    const user = isInteraction ? message.user : message.author;
    const currentTime = Date.now();
    const oldTime = await globalCooldownDB.get(`${interactionType}.${command.name}.${user.id}`);
    if (Math.floor(currentTime - (oldTime ?? 0)) >= command.globalCooldown || isNaN(oldTime)) {
        await globalCooldownDB.set(`${interactionType}.${command.name}.${user.id}`, currentTime);
        return true;
    } else {
        if (command.returnErrors == false || command.returnGlobalCooldownError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`You are currently at cooldown. Please try again in <t:${Math.floor(Math.floor(oldTime + command.globalCooldown) / 1000)}:R>.`);

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    };
};