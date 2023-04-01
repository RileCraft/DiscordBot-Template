const { EmbedBuilder } = require("discord.js");

module.exports = async(client, message, command) => {
    if (!command.allUserPermissions || !Array.isArray(command.allUserPermissions || !message.guild)) return true;
    const user = message.member;
    if (command.allUserPermissions.every(permission => user.permissions.toArray().includes(permission))) return true;
    else {
        if (command.returnErrors == false || command.returnallUserPermissionsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: user.user.tag,
            iconURL: user.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`You are missing the set permissions which are necessary to run this command. Please acquire these permissions:\n${command.allUserPermissions.map(permission => `↳ \`${permission}\``).join("\n")}`);

        message.reply({
            embeds: [errorEmbed]
        });
        return false;
    }
};