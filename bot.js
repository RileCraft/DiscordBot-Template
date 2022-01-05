(async () => {
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_INVITES,
        Discord.Intents.FLAGS.GUILD_BANS
    ],
    partials: ["CHANNEL"]
});
exports.client = client;
global.ROOT = {}
ROOT.path = __dirname;
ROOT.config = require("./Config")
client.commands = {};
client.events = new Discord.Collection();
client.commands.messageCommands = new Discord.Collection();
client.commands.messageCommands.aliases = new Discord.Collection();
client.commands.contextMenus = new Discord.Collection();
client.commands.slashCommands = new Discord.Collection();
client.commands.buttonCommands = new Discord.Collection();
client.commands.selectMenus = new Discord.Collection();
    
const Handler = require(`${ROOT.path}/Root/Structures/Handlers/Handler`);
await Handler.loadMessageCommands(client);
await Handler.loadEvents(client);
await client.login(ROOT.config.token);
await Handler.loadSlashCommands(client);
await Handler.loadContextMenus(client);
await Handler.loadButtonCommands(client);
await Handler.loadSelectMenus(client);
})()