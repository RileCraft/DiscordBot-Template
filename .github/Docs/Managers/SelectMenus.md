# SelectMenus
## Format
```js
// This format is for the button file that you will create in `Src/Interactions/SelectMenus`.
module.exports = {
    name: "selectMenuName",
    run: async(client, interaction) => {
        // Code
    }
};
```
## Example Code
### SelectMenu Creation Code
```js
const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");
const ActionRow = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
    .setCustomId("SelectMenuExample")
    .setPlaceholder("Free Cookies!")
    .addOptions(
        [
            {
                label: "Click for cookies!",
                description: "Freeee!",
                value: "CookieBox"
            }
        ]
    )
);
message.channel.send({
    content: "Cookies SelectMenu",
    components: [ActionRow]
});
```
### SelectMenu Code
```js
// Code for the `Src/Interactions/SelectMenus/SelectMenuExample.js
module.exports = {
    name: "SelectMenuExample",
    run: async(client, interaction) => {
        interaction.reply({
            content: "Here is your cookie! :cookie:"
        });
    }
};
```