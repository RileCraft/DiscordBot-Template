import commandOptionsChecker from "../structures/commandOptions/processor.js";
export const Event = {
    name: "interactionCreate",
    run: async (interaction, client) => {
        if (interaction.isChatInputCommand()) {
            const slashCommand = client.slashCommands.get(interaction.commandName);
            if (!slashCommand) return;

            if (!await commandOptionsChecker(client, interaction, slashCommand, "SlashCommand")) return;
            else slashCommand.run(interaction, client);
        }

        else if (interaction.isAutocomplete()) {
            const slashCommand = client.slashCommands.get(interaction.commandName);
            if (!slashCommand || !slashCommand.autocomplete) return;

            if (!await commandOptionsChecker(client, interaction, slashCommand, "SlashCommand")) return;
            else slashCommand.autocomplete(interaction, client);
        }

        else if (interaction.isContextMenuCommand()) {
            const contextMenu = client.contextMenus.get(interaction.commandName);
            if (!contextMenu) return;

            if (!await commandOptionsChecker(client, interaction, contextMenu, "ContextMenu")) return;
            else contextMenu.run(interaction, client);
        }

        else if (interaction.isAnySelectMenu()) {
            const selectMenuCommand = client.selectMenus.get(interaction.values[0]) ?? client.selectMenus.get(interaction.customId);
            if (!selectMenuCommand) return;

            if (!await commandOptionsChecker(client, interaction, selectMenuCommand, "SelectMenu")) return;
            else selectMenuCommand.run(interaction, client);
        }

        else if (interaction.isButton()) {
            const buttonInteraction = client.buttonCommands.get(interaction.customId);
            if (!buttonInteraction) return;

            if (!await commandOptionsChecker(client, interaction, buttonInteraction, "Button")) return;
            else buttonInteraction.run(interaction, client);
        }

        else if (interaction.isModalSubmit()) {
            const modalInteraction = client.modalForms.get(interaction.customId);
            if (!modalInteraction) return;

            if (!await commandOptionsChecker(client, interaction, modalInteraction, "ModalForm")) return;
            else modalInteraction.run(interaction, client);
        };
    }
}; // InteractionCreate event to handle all interactions and execute them.