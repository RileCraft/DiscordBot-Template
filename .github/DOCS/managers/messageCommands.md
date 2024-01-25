# MessageCommands (With Aliases)
## Format
```js
export const MsgCommand = {
    name: "commandName",
    // Other Command Options
    aliases: ["commandName2", "commandName3"], // Optional to be provided.
    run: async(client, message, args) => {
        // Code Here
    }
};
```

## Example Code
```js
export const MsgCommand = {
    name: "ping",
    // Other Command Options
    aliases: ["pong"],
    run: (client, message, args) => {
        message.channel.send({
            content: `My ping is ${client.ws.ping}ms.`
        });
    }
};
```