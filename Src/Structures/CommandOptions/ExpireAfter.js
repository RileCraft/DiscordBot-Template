const { bold } = require("chalk");
const { EmbedBuilder } = require("discord.js");
const ms = require("ms")
module.exports = (DiscordClient, message, Command, IsInteraction, InteractionType) => {
    if (!Command.expireAfter) return true;
    if (isNaN(Command.expireAfter)) {
        console.log(bold.yellow(`[ERROR] Invalid input detected in ExpireAfter option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    let user;
    if (IsInteraction) user = message.user
    else user = message.author
    const Time = DiscordClient.expireAfter.get(`${Command.name}_${InteractionType}`) ?? Date.now()

    if (Math.floor(Date.now() - Time) < Command.expireAfter) return true;
    else {
        if (Command.returnErrors == false || Command.returnExpireAfterError == false) return false;
        else {
            const errorEmbed = new EmbedBuilder()
                .setAuthor({
                    name: user.tag,
                    iconURL: user.displayAvatarURL({
                        dynamic: true
                    })
                })
                .setTimestamp()
                .setColor("#FF0000")
                .setDescription("This command has reached it's expiration time and cannot be used anymore.");
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