# Button Interaction
## Format
```js
// This format is for the button file that you will create in `src/interactions/buttons`.
import { ButtonCommand } from "../../types.js";

export const Button: ButtonCommand = {
    name: "button's CustomId",
    // Other Command Options
    run: async(client, interaction): Promise<void> => {
        // code
    }
};
```

## Example Code
### Button Creation Code
```js
import { ButtonBuilder, ActionRowBuilder } from "discord.js";

const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setCustomId('evalbutton')
    .setLabel('Delete Output')
    .setStyle('Danger'),
);
message.channel.send({
    content: "This is a button",
    components: [row]
});
```

### Button Code
```js
// Code for the `src/interactions/buttons/evalButton.js
import { ButtonCommand } from "../../types.js";

export const Button: ButtonCommand = {
    name: "evalbuttton",
    // Other Command Options
    run: (interaction, client): void => {
        interaction.reply({
            content: "This button is working!"
        });
    }
};
```