import { Client, GatewayIntentBits, Partials } from "discord.js";
import { BOT_TOKEN } from "./Src/Config.js";
import MessageCommandsHandler from "./Src/Structures/Managers/MessageCommands.js";
import ClientEventHandler from "./Src/Structures/Managers/Events.js";
import ButtonCommandsHandler from "./Src/Structures/Managers/ButtonCommands.js";
import ModalFormsHandler from "./Src/Structures/Managers/ModalForms.js";
import SelectMenusHandler from "./Src/Structures/Managers/SelectMenus.js";
import SlashCommandsHandler from "./Src/Structures/Managers/SlashCommands.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { QuickDB } from "quick.db";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const rootPath = __dirname;

(async() => {
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

    client.cooldownDB = new QuickDB({ filePath: `${__dirname}/cooldownDB.sqlite` });

    client.messageCommands = new Map();
    client.messageCommands_Aliases = new Map();
    client.events = new Map();
    client.buttonCommands = new Map();
    client.selectMenus = new Map();
    client.modalForms = new Map();
    client.slashCommands = new Map();

    await MessageCommandsHandler(client, __dirname);
    await ClientEventHandler(client, __dirname);
    await ButtonCommandsHandler(client, __dirname);
    await SelectMenusHandler(client, __dirname);
    await ModalFormsHandler(client, __dirname);
    await client.login(BOT_TOKEN);
    await SlashCommandsHandler(client, __dirname);
})();