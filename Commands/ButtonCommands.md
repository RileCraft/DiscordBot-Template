# **Button Interaction**

## **Default Format**
```javascript
module.exports = {
    name: "buttonName",
    run: async(client, interaction, container) => {
        // Do your dumb stuff.
    }
}
```
## **Example**
### **Button Code**
```javascript
new container.Discord.MessageActionRow().addComponents(
    new container.Discord.MessageButton()
    .setCustomId('deleteButton')
    .setLabel('Delete Output')
    .setStyle('DANGER')
    );
```

### **deleteButton.js**
```javascript
module.exports = {
    name: "deleteButton",
    ownerOnly: true,
    run: async(client, interaction, container) => {
        interaction.message.delete()
    }
}
```