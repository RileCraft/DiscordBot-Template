# SlashCommands
## Format
```js
const { ApplicationCommandType } = require("discord.js");
module.exports = {
    name: "commandname",
    description: "This is a command!",
    options: [], // Optional
    type: ApplicationCommandType.ChatInput,
    run: async(client, interaction) => {
        // Code
    }
};
```
## Example Code
```js
const { ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js");
module.exports = {
    name: "ping",
    options: [{
        name: "user",
        type: ApplicationCommandOptionType.User,
        description: "Provide the user.",
        required: true
    }],
    type: ApplicationCommandType.ChatInput,
    description: "Ping users yes",
    run: async(client, interaction) => {
        const user = interaction.options.getUser("user")
        interaction.reply({
            content: `Get ponged <@${user.id}> lol`
        });
    }
};
```

# Guild / Global Commands
* Applicable to both `slashCommands` and `contextMenus`.
* If you want to create a global command then create the command file in the `Src/Interactions/SlashCommands/Global` directory.
* If you want to create a guild command then you must create the command file in this format. `Src/Interactions/SlashCommands/Guilds/<GuildID>`.
* Example: If you want to create a ping command for guild ID of `890440523725291530` then you will create the file in `Src/Interactions/SlashCommands/Guilds/890440523725291530/Ping.js`.

# ContextMenus
## Format
```js
const { ApplicationCommandType } = require("discord.js");
module.exports = {
    name: "commandname",
    type: ApplicationCommandType.User or ApplicationCommandType.Message, // Use only one of them.
    run: async(client, interaction) => {
        // Code
    }
};
```
## Example Code
```js
const { ApplicationCommandType } = require("discord.js");
module.exports = {
    name: "log-content",
    type: ApplicationCommandType.Message,
    run: async(client, interaction) => {
        const msgContent = interaction.channel.messages.cache.get(interaction.targetId ?? await interaction.channel.messages.fetch(interaction.targetId);
        console.log(msgContent);
    }
}
```