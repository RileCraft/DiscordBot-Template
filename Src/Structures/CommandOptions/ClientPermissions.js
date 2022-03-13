module.exports = async function (message, command, Discord) {
    if (!command.clientPermissions) return false;
    let missing = []
    command.clientPermissions.forEach(i => {
        if (!message.guild.me.permissions.has(i)) missing.push(i)
    })
    if (missing.length == 0) return false;
    else {
        if (command.returnClientPermissions == false || command.returnNoErrors) return true;
        else message.reply({
            embeds: [new Discord.MessageEmbed()
                .setAuthor({
                    name: message.member.user.tag,
                    iconURL: message.member.user.displayAvatarURL({ dynamic: true })
                })
                .setColor("RANDOM")
                .setTimestamp()
                .setDescription(`I require these permissions to be able to run this command.\n•${missing.join("\n•")}`)],
                allowedMentions: {
                    repliedUser: false
                }
            })
            return true
        }
    }