# **Button Interaction**

## **Default Format**
```js
module.exports = {
    name: "buttonName",
    run: async(client, interaction, container) => {
        // Do your dumb stuff.
    }
}
```
## **Example**
### **Button Code**
```js
new container.Discord.MessageActionRow().addComponents(
    new container.Discord.MessageButton()
    .setCustomId('deleteButton')
    .setLabel('Delete Output')
    .setStyle('DANGER')
    );
```

### **deleteButton.js**
```js
module.exports = {
    name: "deleteButton",
    ownerOnly: true,
    run: async(client, interaction, container) => {
        interaction.message.delete()
    }
}
```