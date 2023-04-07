const { ApplicationCommandType } = require("discord.js");

module.exports = {
    name: "getuser",
    type: ApplicationCommandType.User,
    run: async(client, interaction) => {
        const member = interaction.guild.members.cache.get(interaction.targetId);
        interaction.reply({
            content: `That is ${member.user.tag}.`
        });
    }
};