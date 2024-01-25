# ContextMenus
## Format
```js
import { ApplicationCommandType } from "discord.js";

export const Context: ContextMenu = {
    name: "name",
    type: ApplicationCommandType.User | ApplicationCommand.Message,
    // Other Command Options
    guilds: ["Guild ID"],  // If you make to make a guild command. (Optional), By default it will be global.
    run: (interaction) => {
        // Code
    }
};
```
## Example Code
```js
export const Context = {
    name: "getuser",
    // Other Command Options
    type: ApplicationCommandType.User,
    run: (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.targetId);
        if (!member) member = interaction.member;

        interaction.reply({
            content: `That is ${member.user.tag}.`
        });
    }
};
```