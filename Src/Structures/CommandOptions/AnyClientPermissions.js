const { bold } = require("chalk");
const { EmbedBuilder } = require("discord.js");
module.exports = (message, Command, InteractionType) => {
    if (!Command.anyClientPermissions) return true;
    if (!Array.isArray(Command.anyClientPermissions)) {
        console.log(bold.yellow(`[ERROR] Invalid input detected in AnyClientPermissions option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    if (!message.guild) {
        console.log(bold.blue(`[WARN] Guild object not found in AnyClientPermissions option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    if (message.guild.members.me.permissions.toArray().some(I => Command.anyClientPermissions.some(i => i.toUpperCase() == I.toUpperCase()))) return true;
    else {
        if (Command.returnErrors == false || Command.returnAnyClientPermissionsError == false) return false;
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
                .setDescription(`I don't have any one of these required permissions to use this command. Required permissions: \n${Command.anyClientPermissions.map(permission => `\`${permission}\``).join(", ")}`);

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