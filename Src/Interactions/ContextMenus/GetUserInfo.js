const { ApplicationCommandType, EmbedBuilder } = require("discord.js")
module.exports = {
    name: "UserInfo",
    type: ApplicationCommandType.User,
    run: async(DiscordClient, interaction) => {
        const targetId = interaction.targetId
        const User = await DiscordClient.users.fetch(targetId)

        const UserDetailsEmbed = new EmbedBuilder()
        .setColor("#FF0000")
        .setThumbnail(User.avatarURL())
        .setTimestamp()
        .setDescription(`**__User Details__**
**Username:** ${User.tag}
**ID:** ${User.id}
**Avatar URLs:** [PNG](${User.avatarURL({ format: "png", size: 4096})}) [JPG](${User.avatarURL({ format: "jpg", size: 4096})}) [GIF](${User.avatarURL({ format: "gif", size: 4096})})
**IsBot:** ${User.bot}
**Mention:** <@${User.id}>
`);

        interaction.reply({
            embeds: [UserDetailsEmbed]
        })
    }
}
