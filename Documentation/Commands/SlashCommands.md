# **SlashCommands**
## **Default Format**
```js
module.exports = {
    name: "cmdname",
    description: "cmd description",
    run: async(client, interaction, Discord) => {
        //stuff
    }
}
```

## **Example**
```js
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
    run: async(client, interaction, Discord) => {
        const user = interaction.options.getUser("user")
        interaction.reply({
            content: `Get ponged <@${user.id}> lol`
        })
    }
}
```