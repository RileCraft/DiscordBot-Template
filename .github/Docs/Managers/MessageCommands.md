# MessageCommands (With Aliases)
## Format
```js
module.exports = {
    name: "commandName",
    aliases: ["commandName2", "commandName3"], // Optional to be provided.
    run: async(client, message, args) => {
        // Code Here
    }
};
```

## Example Code
```js
module.exports = {
    name: "ping",
    aliases: ["pong"],
    run: async(client, message, args) => {
        message.channel.send({
            content: `My ping is ${client.ws.ping}ms.`
        });
    }
};

// The command can be now ran with <BotPrefix>ping or <BotPrefix>pong and it will return the ping of the bot.
```