# Events
## Client Events
### Format
```js
import { ClientEvent } from "../types.js";

export const Event: ClientEvent = {
    name: "clientEventName",
    run: async(<event args>): Promise<void> => {
        // Code
    }
};
```
### Example Code
```js
import { ClientEvent } from "../types.js";

export const Event: ClientEvent = {
    name: "channelCreate", // Omitted whenever a channel is created in a guild.
    run: (channel): void => {
        console.log(`A new channel was created in the ${channel.guild.name} of the name ${channel.name}.`);
    }
};
```

## Non-Client Events
### Format
```js
import { ClientEvent } from "../types.js";

export const Event: ClientEvent = {
    customEvent: true,
    run: async(client): Promise<void> => {
        // Code
    }
};
```
### Example Code
```js
import { ClientEvent } from "../types.js";

export const Event: ClientEvent = {
    customEvent: true,
    run: (client): void => {
        client.Distube.on("addSong", (queue, song) => {
            // Your Code
        });
    }
};
```