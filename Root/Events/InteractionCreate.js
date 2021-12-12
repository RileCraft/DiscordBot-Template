module.exports = {
    name: "interactionCreate",
    run: async(interaction, client) => {
        const loadCommandOptions = require(`${ROOT.path}/Root/Classes/CommandOptions/loadCommandOptions`)
        const customId = interaction.customId
        if (interaction.isButton()) loadCommandOptions(client, interaction, client.commands.buttons.get(customId), true, "Button")
        else if (interaction.isSelectMenu()) {
            interaction.values.forEach(id => {
                const cmd = client.commands.menus.get(id)
                if(!cmd) return;
                loadCommandOptions(client, interaction, cmd, true, "SelectMenus")
            })
            if (client.commands.menus.get(customId)) loadCommandOptions(client, interaction, client.commands.menus.get(customId), true, "SelectMenus")
        }
        else if (interaction.isCommand()) loadCommandOptions(client, interaction, client.commands.slash.get(interaction.commandName), true, "Slash")
        else if (interaction.isContextMenu()) loadCommandOptions(client, interaction, client.commands.slash.get(interaction.commandName), true, "ContextMenu")
    }
}