# ContextMenus
## Format
```js
import { ApplicationCommandType, UserContextMenuCommandInteraction, MessageContextMenuCommandInteraction } from "discord.js";
import { ContextMenu } from "../../types.js";

export const Context: ContextMenu = {
    name: "name",
    type: ApplicationCommandType.User | ApplicationCommand.Message,
    // Other Command Options
    guilds: ["Guild ID"],  // If you make to make a guild command. (Optional), By default it will be global.
    run: (interaction): void => {
        // Code
    }
};
```
## Example Code
```js
import { ApplicationCommandType, UserContextMenuCommandInteraction } from "discord.js";
import { ContextMenu } from "../../types.js";

export const Context: ContextMenu = {
    name: "getuser",
    type: ApplicationCommandType.User,
    run: (interaction): void => {
        interaction = interaction as UserContextMenuCommandInteraction<"cached">;  // If you want to use UserContextMenuCommandInteraction specifically. (For User Context Menus))
        interaction = interaction as MessageContextMenuCommandInteraction<"cached">;  // If you want to use MessageContextMenuCommandInteraction specifically. (For Message Context Menus)

        let member = interaction.guild.members.cache.get(interaction.targetId);
        if (!member) member = interaction.member;

        interaction.reply({
            content: `That is ${member.user.tag}.`
        });
    }
};
```