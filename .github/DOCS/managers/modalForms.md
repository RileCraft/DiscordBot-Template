# Modals
## Format
```js
// This format is for the modalForms file that you will create in `src/interactions/modalForms`.
import { ModalForm } from "../../types.js";

export const Modal: ModalForm = {
    name: "modalName",
    // Other Command Options
    run: (interaction, client): void => {
        // Code Here
    }
};
```
## Example Code
### Modal Creation Code
```js
import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
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

const firstActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(favoriteColorInput);
const secondActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(hobbiesInput);

modal.addComponents(firstActionRow, secondActionRow);
await interaction.showModal(modal);
```
### Modal Code
```js
// Code for the `src/interactions/modalForms/exampleModal.js
import { ModalForm } from "../../types.js";

export const Modal: ModalForm = {
    name: "ExampleModal",
    // Other Command Options
    run: (interaction): void => {
        interaction.reply({
            content: "This modal is correctly functioning."
        });
    }
}; 
```