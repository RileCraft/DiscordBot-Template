# SlashCommands
## Format
```js
import { SlashCommand } from "../../types.js";
import { ChatInputCommandInteraction, AutocompleteInteraction } from "discord.js";

export const Slash: SlashCommand = {
    name: "commandname",
    description: "short description",
    // Other Command Options
    guilds: ["Guild ID"], // If you make to make a guild command. (Optional), By default it will be global.
    autocomplete: (interaction, client): void => {
        // Code here
    }, // Code for the autocomplete command option (optional)
    run: (interaction, client): void => {
        // Code here
    }
};
```
## Example Code
```js
import { SlashCommand } from "../../types.js";
import { ApplicationCommandOptionType } from "discord.js";

export const Slash: SlashCommand = {
    name: "ping",
    options: [
        {
            name: "type",
            description: "What type of ping you want",
            required: true,
            type: ApplicationCommandOptionType.String,
            choices: [
                {
                    name: "client",
                    value: "client"
                }
            ]
        },
        {
            name: "autocomplete",
            type: ApplicationCommandOptionType.String,
            required: false,
            description: "auto",
            autocomplete: true
        }
    ],
    description: "pong description",
    autocomplete: (interaction): void => {
        const focusedValue = interaction.options.getFocused();
		const choices = ['Popular Topics: Threads', 'Sharding: Getting started', 'Library: Voice Connections', 'Interactions: Replying to slash commands', 'Popular Topics: Embed preview'];
		const filtered = choices.filter(choice => choice.startsWith(focusedValue));
		interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
    },
    run: (interaction, client): void => {
        console.log(`${interaction.user.username} chose ${interaction.options.getString("type")}`)
        console.log(`${interaction.user.username} chose ${interaction.options.getString("autocomplete") ?? "None"}`)
    }
};
```