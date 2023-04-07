# Button Interaction
## Format
```js
// This format is for the button file that you will create in `Src/Interactions/Buttons`.
module.exports = {
    name: "button's CustomId",
    run: async(client, interaction) => {
        // code
    }
};
```

## Example Code
### Button Creation Code
```js
const { ButtonBuilder, ActionRowBuilder } = require("discord.js");
const row = new ActionRowBuilder()
.addComponents(
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
// Code for the `Src/Interactions/Buttons/EvalButton.js
module.exports = {
    name: "evalbuttton",
    run: async(client, interaction) => {
        interaction.reply({
            content: "This button is working!"
        });
    }
};
```