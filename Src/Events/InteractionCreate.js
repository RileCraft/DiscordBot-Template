const commandOptionsProcessor = require("../Structures/CommandOptions/Processor");
module.exports = {
    name: 'interactionCreate',
    run: async(interaction, client) => {
        if (interaction.isChatInputCommand() || interaction.isContextMenuCommand()) {
            const slashCommand = client.slashCommands.get(interaction.commandName);
            if (!slashCommand) return;
            const authenticatedCMDOptions = await commandOptionsProcessor(client, interaction, slashCommand, true, "SlashCommand");
            if (authenticatedCMDOptions) return await slashCommand.run(client, interaction);
        }
        else if (interaction.isAnySelectMenu()) {
            const selectMenuCommand = client.selectMenus.get(interaction.values[0]) ?? client.selectMenus.get(interaction.customId);
            if (!selectMenuCommand) return;
            const authenticatedCMDOptions = await commandOptionsProcessor(client, interaction, selectMenuCommand, true, "SelectMenu");
            if (authenticatedCMDOptions) return await selectMenuCommand.run(client, interaction);
        }
        else if (interaction.isButton()) {
            const buttonInteraction = client.buttonCommands.get(interaction.customId);
            if (!buttonInteraction) return;
            const authenticatedCMDOptions = await commandOptionsProcessor(client, interaction, buttonInteraction, true, "Button");
            if (authenticatedCMDOptions) return await buttonInteraction.run(client, interaction);
        }
        else if (interaction.isModalSubmit()) {
            const modalInteraction = client.modalForms.get(interaction.customId);
            if (!modalInteraction) return;
            const authenticatedCMDOptions = await commandOptionsProcessor(client, interaction, modalInteraction, true, "ModalForm");
            if (authenticatedCMDOptions) return await modalInteraction.run(client, interaction);
        }
    }
};