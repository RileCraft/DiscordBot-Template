import { EmbedBuilder } from "discord.js";
import { channelCooldownDB } from "../../../Bot.mjs";

export default async(client, message, command, isInteraction, interactionType) => {
    if (!command.channelCooldown || isNaN(command.channelCooldown)) return true;
    if (!command.allowInDms && !message.guild) return true;
    const currentTime = Date.now();
    const user = isInteraction ? message.user : message.author;
    const oldTime = await channelCooldownDB.get(`${message.channel.id}.${interactionType}.${command.name}.${user.id}`);
    if (Math.floor(currentTime - (oldTime ?? 0)) >= command.channelCooldown || isNaN(oldTime)) {
        await channelCooldownDB.set(`${message.channel.id}.${interactionType}.${command.name}.${user.id}`, currentTime);
        return true;
    } else {
        if (command.returnErrors == false || command.returnChannelCooldownError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: user.globalName,
            iconURL: user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`You are currently at cooldown. Please try again in <t:${Math.floor(Math.floor(oldTime + command.channelCooldown) / 1000)}:R>.`);

        message.reply({
            embeds: [errorEmbed],
            allowedMentions: {
                repliedUser: false
            }
        });
        return false;
    };
};