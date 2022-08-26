const { bold } = require("chalk");
const { EmbedBuilder } = require("discord.js");
module.exports = (DiscordClient, message, Command, IsInteraction, InteractionType) => {
    if (!Command.limitUses) return true;
    if (isNaN(Command.limitUses)) {
        console.log(bold.yellow(`[ERROR] Invalid input detected in LimitUses option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    let user;
    if (IsInteraction) user = message.user
    else user = message.author
    const Database = DiscordClient.limitCommandUses;

    if (Database.get(`${Command.name}_${InteractionType}`) < Command.limitUses) return true;
    else {
        if (Command.returnErrors == false || Command.returnLimitUsesError == false) return false;
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
                .setDescription("This command has reached it's set limit of uses and cannot be used anymore.");
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