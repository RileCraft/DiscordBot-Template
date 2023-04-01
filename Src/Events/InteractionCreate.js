module.exports = {
    name: 'interactionCreate',
    run: async(interaction, client) => {
        if (interaction.isChatInputCommand() || interaction.isContextMenuCommand()) {
            const slashCommand = client.slashCommands.get(interaction.commandName);
            if (!slashCommand) return;
            slashCommand.run(client, interaction);
        }
        else if (interaction.isAnySelectMenu()) {
            const selectMenuCommand = client.selectMenus.get(interaction.values[0]) ?? client.selectMenus.get(interaction.customId);
            if (!selectMenuCommand) return;
            selectMenuCommand.run(client, interaction);
        }
        else if (interaction.isButton()) {
            const buttonInteraction = client.buttonCommands.get(interaction.customId);
            if (!buttonInteraction) return;
            buttonInteraction.run(client, interaction);
        }
        else if (interaction.isModalSubmit()) {
            const modalInteraction = client.modalForms.get(interaction.customId);
            if (!modalInteraction) return;
            modalInteraction.run(client, interaction);
        }
    }
};