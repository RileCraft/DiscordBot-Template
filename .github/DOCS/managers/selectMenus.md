# SelectMenus
## Format
```js
// This format is for the button file that you will create in `src/interactions/selectMenus`.
import { SelectMenu } from "../../types.js";

export const Menu: SelectMenu = {
    name: "selectMenuName",
    // Other Command Options
    run: (interaction): void => {
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
        new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
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
import { SelectMenu } from "../../types.js";

export const Menu: SelectMenu = {
    name: "SelectMenuExample",
    // Other Command Options
    run: (interaction): void => {
        interaction = interaction as StringSelectMenuInteraction<"cached">; // If you want to use StringSelectMenuInteraction specifically.
        
        interaction.reply({
            content: "Here is your cookie! :cookie:"
        });
    }
}; 
```