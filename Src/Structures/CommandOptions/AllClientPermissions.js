const { bold } = require("chalk");
const { EmbedBuilder } = require("discord.js");
module.exports = (message, Command, InteractionType) => {
    if (!Command.allClientPermissions) return true;
    if (!Array.isArray(Command.allClientPermissions)) {
        console.log(bold.yellow(`[ERROR] Invalid input detected in AllClientPermissions option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    if (!message.guild) {
        console.log(bold.blue(`[WARN] Guild object not found in AllClientPermissions option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    let MissingPermissions = []

    Command.allClientPermissions.forEach(Permission => {
        if (!message.guild.members.me.permissions.has(Permission)) MissingPermissions.push(Permission)
    })
    if (MissingPermissions.length == 0) return true;
    else {
        if (Command.returnErrors == false || Command.returnAllClientPermissionsError == false) return false;
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
                .setDescription(`I don't have these required permissions to use this command. Required permissions: \n${MissingPermissions.map(permission => `\`${permission}\``).join(", ")}`);

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