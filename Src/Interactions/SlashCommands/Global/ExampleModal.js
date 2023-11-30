import { ApplicationCommandType, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

export const name = "testmodal";
export const type = ApplicationCommandType.ChatInput;
export const description = "Test Modal.";
export async function run(client, interaction) {
    const modal = new ModalBuilder()
        .setCustomId('ExampleModal')
        .setTitle('My Modal');

    const favoriteColorInput = new TextInputBuilder()
        .setCustomId('favoriteColorInput')
        .setLabel("What's your favorite color?")
        .setStyle(TextInputStyle.Short);

    const hobbiesInput = new TextInputBuilder()
        .setCustomId('hobbiesInput')
        .setLabel("What's some of your favorite hobbies?")
        .setStyle(TextInputStyle.Paragraph);

    const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
    const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

    modal.addComponents(firstActionRow, secondActionRow);
    await interaction.showModal(modal);
}