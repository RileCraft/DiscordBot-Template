const db = require("quick.db")
module.exports = async function (client, message, command, isInteraction, interactionType, Discord) {
    if (!command.cooldown) return false;
    const currentTime = Date.now()
    const user = message.member.user
    const cooldown = command.cooldown
    const oldTime = await db.get(`CooldownSystem.${message.guild.id}.${command.name}.${interactionType ?? "Normal"}.${user.id}`) ?? 0
    if (Math.floor(currentTime - oldTime) >= cooldown || oldTime == 0) {
        await db.set(`CooldownSystem.${message.guild.id}.${command.name}.${interactionType ?? "Normal"}.${user.id}`, currentTime)
        return false;
    } else {
        if (command.returnCooldown == false || command.returnNoErrors) return true;
        else {
            message.reply({
                embeds: [new Discord.MessageEmbed()
                    .setAuthor({
                        name: message.member.user.tag,
                        iconURL: message.member.user.displayAvatarURL({ dynamic: true })
                    })
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setDescription(`You are currently at cooldown until <t:${Math.floor(Math.floor(oldTime + cooldown) / 1000)}>`)],
                    allowedMentions: {
                        repliedUser: false
                    }
                })
                return true
            }
        }
    }