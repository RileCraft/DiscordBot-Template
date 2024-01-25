# Events
## Client Events
### Format
```js
export const Event = {
    name: "clientEventName",
    run: async(<event args>) => {
        // Code
    }
};
```
### Example Code
```js
export const Event = {
    name: "channelCreate", // Omitted whenever a channel is created in a guild.
    run: (channel) => {
        console.log(`A new channel was created in the ${channel.guild.name} of the name ${channel.name}.`);
    }
};
```

## Non-Client Events
### Format
```js
export const Event = {
    customEvent: true,
    run: async(client) => {
        // Code
    }
};
```
### Example Code
```js
export const Event = {
    customEvent: true,
    run: (client) => {
        client.Distube.on("addSong", (queue, song) => {
            // Your Code
        });
    }
};
```