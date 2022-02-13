# **SelectMenu Interactions**
## **Default Format**
```js
module.exports = {
    name: "name", // selectMenu's Custom ID or one of the options values.
    run: async(client, interaction, container) => {
        //Stuff
    }
}
```

## **Example**
### **SelectMenu Code**
```js
new container.Discord.MessageActionRow().addComponents(
    new container.Discord.MessageSelectMenu()
    .setCustomId('help')
	.setPlaceholder('Avaliable Commands')
    .addOptions([
        {
            label: '🛠 HomePage',
            description: 'Return back to homepage.',
            value: 'home',
            },
            {
                label: 'Bababooey',
                description: 'E',
                value: 'bababooey',
                }
            ]),
        );
```

### **bababooey.js**
```js
module.exports = {
    name: "bababooey",
    ownerOnly: true,
    run: async(client, interaction, container) => {
        interaction.reply({
            content: "Bababooey indeed"
        })
    }
}
```
