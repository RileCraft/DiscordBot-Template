# MessageCommands (With Aliases)
## Format
```js
import { MessageCommand } from "../types.js";

export const MsgCommand: MessageCommand = {
    name: "commandName",
    // Other Command Options
    aliases: ["commandName2", "commandName3"], // Optional to be provided.
    run: async(client, message, args): Promise<void> => {
        // Code Here
    }
};
```

## Example Code
```js
import { MessageCommand } from "../types.js";

export const MsgCommand: MessageCommand = {
    name: "ping",
    // Other Command Options
    aliases: ["pong"],
    run: (client, message, args): void => {
        message.channel.send({
            content: `My ping is ${client.ws.ping}ms.`
        });
    }
};

```