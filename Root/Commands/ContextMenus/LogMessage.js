module.exports = {
    name: "log",
    type: "MESSAGE",
    run: async(client, interaction, container) => {
        console.log(interaction.channel.messages.cache.get(interaction.targetId) ?? await interaction.channel.messages.fetch(interaction.targetId))
        interaction.reply({
            content: "Logged message to console.",
            ephemeral: true
        })
    }
}