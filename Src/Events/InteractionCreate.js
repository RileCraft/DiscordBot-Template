import commandOptionsChecker from "../Structures/CommandOptions/Processor.js";

export const name = 'interactionCreate';
export async function run(interaction, client, rootPath) {
    if (interaction.isChatInputCommand() || interaction.isContextMenuCommand()) {
        const slashCommand = client.slashCommands.get(interaction.commandName);
        if (!slashCommand) return;
        await commandOptionsChecker(client, interaction, slashCommand, true, "SlashCommand") ? await slashCommand.run(client, interaction, rootPath) : 1;
    }
    else if (interaction.isAnySelectMenu()) {
        const selectMenuCommand = client.selectMenus.get(interaction.values[0]) ?? client.selectMenus.get(interaction.customId);
        if (!selectMenuCommand) return;
        await commandOptionsChecker(client, interaction, selectMenuCommand, true, "SelectMenu") ? await selectMenuCommand.run(client, interaction, rootPath) : 1;
    }
    else if (interaction.isButton()) {
        const buttonInteraction = client.buttonCommands.get(interaction.customId);
        if (!buttonInteraction) return;
        await commandOptionsChecker(client, interaction, buttonInteraction, true, "Button") ? await buttonInteraction.run(client, interaction, rootPath) : 1;
    }
    else if (interaction.isModalSubmit()) {
        const modalInteraction = client.modalForms.get(interaction.customId);
        if (!modalInteraction) return;
        await commandOptionsChecker(client, interaction, modalInteraction, true, "ModalForm") ? await modalInteraction.run(client, interaction, rootPath) : 1;
    }
}