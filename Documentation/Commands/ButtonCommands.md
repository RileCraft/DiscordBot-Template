# **Button Interaction**

## **Default Format**
```js
module.exports = {
    name: "buttonName",
    run: async(client, interaction, Discord) => {
        // Do your dumb stuff.
    }
}
```
## **Example**
### **Button Code**
```js
new Discord.MessageActionRow().addComponents(
    new Discord.MessageButton()
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
    run: async(client, interaction, Discord) => {
        interaction.message.delete()
    }
}
```