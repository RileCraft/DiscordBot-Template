export const name = 'interactionCreate';
export async function run(interaction, client, rootPath) {
    if (interaction.isChatInputCommand() || interaction.isContextMenuCommand()) {
        const slashCommand = client.slashCommands.get(interaction.commandName);
        if (!slashCommand) return;
        await slashCommand.run(client, interaction, rootPath);
    }
    else if (interaction.isAnySelectMenu()) {
        const selectMenuCommand = client.selectMenus.get(interaction.values[0]) ?? client.selectMenus.get(interaction.customId);
        if (!selectMenuCommand) return;
        await selectMenuCommand.run(client, interaction, rootPath);
    }
    else if (interaction.isButton()) {
        const buttonInteraction = client.buttonCommands.get(interaction.customId);
        if (!buttonInteraction) return;
        await buttonInteraction.run(client, interaction, rootPath);
    }
    else if (interaction.isModalSubmit()) {
        const modalInteraction = client.modalForms.get(interaction.customId);
        if (!modalInteraction) return;
        await modalInteraction.run(client, interaction, rootPath);
    }
}