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
```js
module.exports = {
    name: "deleteButton",
    ownerOnly: true,
    run: async(client, interaction, Discord) => {
        interaction.message.delete()
    }
}
```