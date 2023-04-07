# Events
## Client Events
### Format
```js
module.exports = {
    name: "clientEventName",
    run: async(<event args>, client, rootPath) => {
        // Code
    }
};
```
### Example Code
```js
module.exports = {
    name: "channelCreate", // Omitted whenever a channel is created in a guild.
    run: async(channel, client) => {
        console.log(`A new channel was created in the ${channel.guild.name} of the name ${channel.name}.`);
    }
};
```

## Non-Client Events
### Format
```js
module.exports = {
    customEvent: true,
    run: async(client, rootPath) => {
        // Code
    }
};
```
### Example Code
```js
module.exports = {
    customEvent: true,
    run: async(client, rootPath) => {
        client.Distube.on("addSong", (queue, song) => {
            // Your Code
        });
    }
};
```