import { EmbedBuilder } from "discord.js";

export default async(client, message, command) => {
    if (!command.allClientPermissions || !Array.isArray(command.allClientPermissions || !message.guild)) return true;
    let missingPermissions = [];
    await command.allClientPermissions.forEach(permission => {
        if (!message.guild.members.me.permissions.toArray().includes(permission)) missingPermissions.push(permission);
    });
    if (missingPermissions.length == 0) return true;
    else {
        if (command.returnErrors == false || command.returnAllClientPermissionsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: message.author.globalName,
            iconURL: message.author.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`The client is missing the set permissions which are necessary to run this command. Please provide the client these permissions to execute this command:\n${missingPermissions.map(permission => `↳ \`${permission}\``).join("\n")}`);

        message.reply({
            embeds: [errorEmbed],
            allowedMentions: {
                repliedUser: false
            }
        });
        return false;
    };
};