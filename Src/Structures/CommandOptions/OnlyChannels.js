const { bold } = require("chalk");
const { EmbedBuilder } = require("discord.js");
module.exports = (message, Command, InteractionType) => {
    if (!Command.onlyChannels) return true;
    if (!message.guild) {
        console.log(bold.blue(`[WARN] Guild object not found in OnlyChannels option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    Command.onlyChannels.forEach(Id => {
        if (!message.guild.channels.cache.get(Id)) console.log(bold.yellow(`[WARN] Invalid Channel Id [${Id}] provided in OnlyChannels option of ${Command.name} of ${InteractionType}.`))
        return true;
    })

    if (Command.onlyChannels.some(Id => message.channel.id == Id)) return true;
    else {
        if (Command.returnErrors == false || Command.returnOnlyChannelsError == false) return false;
        else {
            const errorEmbed = new EmbedBuilder()
                .setColor('#FF0000')
                .setAuthor({
                    name: message.member.user.tag,
                    iconURL: message.member.user.displayAvatarURL({
                        dynamic: true
                    })
                })
                .setTimestamp()
                .setDescription(`This command can only be run in these channels: \n${Command.onlyChannels.map(Id => `<#${Id}>`).join(", ")}`);

            message.reply({
                embeds: [errorEmbed],
                allowedMentions: {
                    repliedUser: false
                }
            })
            return false;
        }
    }
}