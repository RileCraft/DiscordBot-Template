import { EmbedBuilder } from "discord.js";

export default async (client, message, command) => {
    if (!command.onlyGuilds || !Array.isArray(command.onlyGuilds || !message.guild)) return true;
    if (command.onlyGuilds.some(guildId => message.guild.id == guildId)) return true;
    else {
        if (command.returnErrors == false || command.returnOnlyGuildsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: message.member.user.globalName,
            iconURL: message.member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`The command you tried to execute cannot be ran in the current guild. Please execute the command in of these authorized guilds:\n${command.onlyGuilds.map(guildId => `↳ \`${client.guilds.cache.get(guildId).name}\``).join("\n")}`);

        message.reply({
            embeds: [errorEmbed],
            allowedMentions: {
                repliedUser: false
            }
        });
        return false;
    }
};