import { Client, GatewayIntentBits, Partials, Collection } from "discord.js";
import config from "./Src/Config.mjs";
import MessageCommandsHandler from "./Src/Structures/Managers/MessageCommands.mjs";
import ClientEventHandler from "./Src/Structures/Managers/Events.mjs";
import ButtonCommandsHandler from "./Src/Structures/Managers/ButtonCommands.mjs";
import ModalFormsHandler from "./Src/Structures/Managers/ModalForms.mjs";
import SelectMenusHandler from "./Src/Structures/Managers/SelectMenus.mjs";
import SlashCommandsHandler from "./Src/Structures/Managers/SlashCommands.mjs";
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
    await ButtonCommandsHandler(client, __dirname);
    await SelectMenusHandler(client, __dirname);
    await ModalFormsHandler(client, __dirname);
    await client.login(config.botToken);
    await SlashCommandsHandler(client, __dirname);
})();