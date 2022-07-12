module.exports = {
    name: "interactionCreate",
    run: async(interaction, client) => {
        const loadCommandOptions = require("../Structures/CommandOptions/loadCommandOptions")
        if (interaction.isButton()) loadCommandOptions(client, interaction, client.commands.buttonCommands.get(interaction.customId), true, "Button")
        else if (interaction.isSelectMenu()) {
            let selectMenuName;
            if (client.commands.selectMenus.get(interaction.customId)) selectMenuName = interaction.customId
            else selectMenuName = interaction.values[0]
            loadCommandOptions(client, interaction, client.commands.selectMenus.get(selectMenuName), true, "SelectMenus")
        }
        else if (interaction.isCommand()) loadCommandOptions(client, interaction, client.commands.slashCommands.get(interaction.commandName), true, "SlashCommand")
        else if (interaction.isContextMenu()) loadCommandOptions(client, interaction, client.commands.contextMenus.get(interaction.commandName), true, "ContextMenus")
    }
}