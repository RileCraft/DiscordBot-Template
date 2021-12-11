module.exports = async function (message, command, Discord) {
    if (!command.requiredAnyRole) return false;
    if (command.requiredAnyRole.some(i => message.member.roles.cache.has(i))) return false;
    else {
        let requiredRoles = []
        command.requiredAnyRole.forEach(i => requiredRoles.push(`<@&${i}>`))
        if (command.returnRequiredAnyRole == false || command.returnNoErrors) return true;
            else message.reply({
            embeds: [new Discord.MessageEmbed()
         .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL({ dynamic: true }))
     .setColor("RANDOM")
     .setTimestamp()
     .setDescription(`You are required to have any one of these roles to be able to run this command.\n•${missing.join("\n•")}`)],
     allowedMentions: {
         repliedUser: false
     }
         })
    return true;
}
}