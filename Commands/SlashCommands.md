# **SlashCommands**
## **Default Format**
```javascript
module.exports = {
    name: "cmdname",
    description: "cmd description",
    run: async(client, interaction, container) => {
        //stuff
    }
}
```

## **Example**
```javascript
module.exports = {
    name: "ping",
    options: [{
        name: "user",
        type: "USER",
        description: "Provide the user.",
        required: true
    }],
    description: "Ping users yes",
    guilds: ["ID"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction, container) => {
        const user = interaction.options.getUser("user")
        interaction.reply({
            content: `Get ponged <@${user.id}> lol`
        })
    }
}
```
## **Sub-Commands**
```javascript
const {  ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")
module.exports = {
    name: "ping",
    type: ApplicationCommandType.ChatInput,
    description: "Bot's latency.",
    options: [
        {
            name: 'user',
            description: 'User to select',
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: 'server',
            description: 'Server to select',
            type: ApplicationCommandOptionType.Subcommand,
        }
    ],
    run: async(DiscordClient, interaction) => {
        if (interaction.options.getSubcommand() === 'user') {
            await interaction.reply('You chose user!')
        } else if (interaction.options.getSubcommand() === 'server') {
            await interaction.reply('You chose server!')
        }
    }
}
```
