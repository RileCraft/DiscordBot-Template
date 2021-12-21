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
        Discord.Intents.FLAGS.GUILD_BANS,
    ],
partials: ["CHANNEL"]
});

exports.client = client;
global.ROOT = {}
ROOT.path = __dirname;
ROOT.config = require(`${ROOT.path}/Root/Storage/Vault/Config`)
client.commands = new Discord.Collection();
client.commands.normal = new Discord.Collection();
client.events = new Discord.Collection();
client.commands.normal.aliases = new Discord.Collection();
client.commands.buttons = new Discord.Collection();
client.commands.menus = new Discord.Collection();
client.commands.slash = new Discord.Collection();

const Handler = require(`${ROOT.path}/Root/Classes/Handlers/Handler`);
await Handler.loadCommands(client);
await Handler.loadEvents(client);
await client.login(ROOT.config.token);
await Handler.loadSlashCommands(client);
await Handler.loadButtonCommands(client);
await Handler.loadSelectMenuCommands(client);
})()