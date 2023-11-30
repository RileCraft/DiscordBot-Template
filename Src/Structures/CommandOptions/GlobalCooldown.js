import { EmbedBuilder } from "discord.js";
import { globalCooldownDB } from "../../../Bot.mjs";

export default async(client, message, command, isInteraction, interactionType) => {
    if (!command.globalCooldown || isNaN(command.globalCooldown)) return true;
    if (!command.allowInDms && !message.guild) return true;
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
            name: user.globalName,
            iconURL: user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`You are currently at cooldown. Please try again in <t:${Math.floor(Math.floor(oldTime + command.globalCooldown) / 1000)}:R>.`);

        message.reply({
            embeds: [errorEmbed],
            allowedMentions: {
                repliedUser: false
            }
        });
        return false;
    };
};