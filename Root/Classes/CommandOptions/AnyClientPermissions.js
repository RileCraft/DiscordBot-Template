module.exports = async function (message, command, Discord) {
    if (!command.anyClientPermission) return false;
    if (command.anyClientPermission.some(i => message.member.permissions.has(i))) return false;
    else {
        if (command.returnAnyClientPermissions == false || command.returnNoErrors) return true;
            else message.reply({
            embeds: [new Discord.MessageEmbed()
         .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL({ dynamic: true }))
     .setColor("RANDOM")
     .setTimestamp()
     .setDescription(`I required any one of these permissions for this command.\n•${command.anyClientPermission.join("\n•")}`)],
     allowedMentions: {
         repliedUser: false
     }
         })
    return true;
}
}