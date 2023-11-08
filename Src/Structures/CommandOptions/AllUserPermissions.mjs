import { EmbedBuilder } from "discord.js";

export default async(client, message, command) => {
    if (!command.allUserPermissions || !Array.isArray(command.allUserPermissions || !message.guild)) return true;
    let missingPermissions = [];
    await command.allUserPermissions.forEach(permission => {
        if (!message.member.permissions.toArray().includes(permission)) missingPermissions.push(permission);
    });
    if (missingPermissions.length == 0) return true;
    else {
        if (command.returnErrors == false || command.returnAllUserPermissionsError == false) return false;
        const errorEmbed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTimestamp()
        .setAuthor({
            name: message.member.user.globalName,
            iconURL: message.member.user.displayAvatarURL({ dynamic: true })
        })
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`You are missing the set permissions which are necessary to run this command. Please acquire these permissions:\n${missingPermissions.map(permission => `↳ \`${permission}\``).join("\n")}`);

        message.reply({
            embeds: [errorEmbed],
            allowedMentions: {
                repliedUser: false
            }
        });
        return false;
    };
};