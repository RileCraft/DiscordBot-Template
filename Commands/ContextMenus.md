# **ContextMenu Interactions**
## **Default Format**
```javascript
module.exports = {
    name: "cmdname",
    type: "cmdtype", // Either USER or MESSAGE
    run: async(client, interaction, container) => {
        // Your Stuff
    }
}
```

## **Example**
```javascript
module.exports = {
    name: "log-content",
    type: "MESSAGE",
    run: async(client, interaction, container) => {
        const msgContent = interaction.channel.messages.cache.get(interaction.targetId ?? await interaction.channel.messages.fetch(interaction.targetId)
        console.log(msgContent)
    }
}
```