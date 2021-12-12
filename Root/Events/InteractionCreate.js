module.exports = {
    name: "interactionCreate",
    run: async(interaction, client) => {
        const loadCommandOptions = require(`${ROOT.path}/Root/Classes/CommandOptions/loadCommandOptions`)
        if (interaction.isButton()) loadCommandOptions(client, interaction, client.commands.buttons.get(interaction.customId), true, "Button")
        else if (interaction.isSelectMenu()) loadCommandOptions(client, interaction, client.commands.menus.get(interaction.values[0]) ?? client.commands.menus.get(interaction.customId), true, "SelectMenus")
        else if (interaction.isCommand()) loadCommandOptions(client, interaction, client.commands.slash.get(interaction.commandName), true, "Slash")
        else if (interaction.isContextMenu()) loadCommandOptions(client, interaction, client.commands.slash.get(interaction.commandName), true, "ContextMenu")
    }
}