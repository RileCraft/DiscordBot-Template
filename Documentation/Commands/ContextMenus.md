# **ContextMenu Interactions**
## **Default Format**
```js
module.exports = {
    name: "cmdname",
    type: "cmdtype", // Either USER or MESSAGE
    run: async(client, interaction, Discord) => {
        // Your Stuff
    }
}
```

## **Example**
```js
module.exports = {
    name: "log-content",
    type: "MESSAGE",
    run: async(client, interaction, Discord) => {
        const msgContent = interaction.channel.messages.cache.get(interaction.targetId ?? await interaction.channel.messages.fetch(interaction.targetId)
        console.log(msgContent)
    }
}
```