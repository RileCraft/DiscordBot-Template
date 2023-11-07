import { Client, GatewayIntentBits, Partials, Collection } from "discord.js";
import config from "./Src/Config.mjs";
import MessageCommandsHandler from "./Src/Structures/Managers/MessageCommands.mjs";
import ClientEventHandler from "./Src/Structures/Managers/Events.mjs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

(async() => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildPresences,
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.MessageContent, // Only for bots with message content intent access.
            GatewayIntentBits.DirectMessageReactions,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.GuildWebhooks,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.GuildInvites,
        ],
        partials: [Partials.Channel]
    });

    client.messageCommands = new Collection();
    client.messageCommands_Aliases = new Collection();
    client.events = new Collection();
    client.buttonCommands = new Collection();
    client.selectMenus = new Collection();
    client.modalForms = new Collection();
    client.slashCommands = new Collection();

    await MessageCommandsHandler(client, __dirname);
    await ClientEventHandler(client, __dirname);
    await client.login(config.botToken);
})();