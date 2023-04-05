const { EmbedBuilder } = require("discord.js");

module.exports = async (client, message, command) => {
    if (!command.onlyGuilds || !Array.isArray(command.onlyGuilds || !message.guild)) return true;
    const member = message.member;
    if (command.onlyGuilds.some(guildId => message.guild.id == guildId)) return true;
    else {
        if (command.returnErrors == false || command.returnOnlyGuildsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: member.user.tag,
            iconURL: member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`The command you tried to execute cannot be ran in the current guild. Please execute the command in of these authorized guilds:\n${command.onlyGuilds.map(guildId => `↳ \`${client.guilds.cache.get(guildId).name}\``).join("\n")}`);

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    }
};