const { bold } = require("chalk");
const { EmbedBuilder } = require("discord.js");
module.exports = (message, Command, IsInteraction) => {
    if (!Command.onlyUsers) return true;
    let user;

    if (IsInteraction) user = message.user
    else user = message.author

    if (Command.onlyUsers.some(Id => user.id == Id)) return true;
    else {
        if (Command.returnErrors == false || Command.returnOnlyUsersError == false) return false;
        else {
            const errorEmbed = new EmbedBuilder()
                .setColor('#FF0000')
                .setAuthor({
                    name: user.tag,
                    iconURL: user.displayAvatarURL({
                        dynamic: true
                    })
                })
                .setTimestamp()
                .setDescription(`This command can only be run by these people: \n${Command.onlyUsers.map(Id => `<@${Id}>`).join(", ")}`);

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