# SelectMenus
## Format
```js
// This format is for the button file that you will create in `src/interactions/selectMenus`.
export const Menu = {
    name: "selectMenuName",
    // Other Command Options
    run: (interaction) => {
        // Code
    }
}; 
```
## Example Code
### SelectMenu Creation Code
```js
import { ActionRowBuilder, StringSelectMenuBuilder } from "discord.js";

message.channel.send({
    content: "Cookies SelectMenu",
    components: [
        new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("SelectMenuExample")
              .setPlaceholder("Free Cookies!")
              .addOptions(
                [{
                    label: "Click for cookies!",
                    description: "Freeee!",
                    value: "CookieBox"
                }]
            )
        )
    ]
});
```
### SelectMenu Code
```js
// Code for the `src/interactions/selectMenus/selectMenuExample.js
export const Menu = {
    name: "SelectMenuExample",
    // Other Command Options
    run: (interaction) => {
        interaction.reply({
            content: "Here is your cookie! :cookie:"
        });
    }
}; 
```