(async () => {
const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const CredentialManager = require("./Src/Credentials/Config");
const DirPath = __dirname;
const { MessageCommandHandler, EventManager, ButtonCommandHandler, SelectMenuHandler, SlashCommandsHandler, ContextMenuHandler, ModalFormsHandler } = require("./Src/Structures/Handlers/HandlersManager")

const DiscordClient = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildBans
    ],
    partials: [Partials.Channel]
});

exports.client = DiscordClient;
exports.rootPath = DirPath;

DiscordClient.limitCommandUses = new Collection()
DiscordClient.expireAfter = new Collection()
DiscordClient.messageCommands = new Collection()
DiscordClient.messageCommands_Aliases = new Collection()
DiscordClient.events = new Collection()
DiscordClient.slashCommands = new Collection()
DiscordClient.contextMenus = new Collection()
DiscordClient.selectMenus = new Collection()
DiscordClient.buttonCommands = new Collection()
DiscordClient.modalForms = new Collection()

await MessageCommandHandler(DiscordClient, DirPath)
await EventManager(DiscordClient, DirPath)
await ButtonCommandHandler(DiscordClient, DirPath)
await SelectMenuHandler(DiscordClient, DirPath)
await ModalFormsHandler(DiscordClient, DirPath)
await DiscordClient.login(CredentialManager.botToken)
await SlashCommandsHandler(DiscordClient, DirPath)
await ContextMenuHandler(DiscordClient, DirPath)
})()