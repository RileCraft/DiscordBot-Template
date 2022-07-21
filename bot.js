(async () => {
    const Discord = require("discord.js");
    const { GatewayIntentBits, Partials } = require("discord.js");
    const config = require("./Config");
    const path = __dirname;
    const client = new Discord.Client({
        intents: [
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildPresences,
            GatewayIntentBits.GuildBans,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildInvites,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.GuildWebhooks,
            GatewayIntentBits.DirectMessageReactions,
            GatewayIntentBits.GuildIntegrations,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.GuildMessages
        ],
        partials: [
            Partials.GuildScheduledEvent, 
            Partials.Channel, 
            Partials.Message,
            Partials.User, 
            Partials.GuildMember,
            Partials.GuildPresences
        ]
    });
    exports.client = client;
    exports.path = path;
    exports.config = config;
    client.commands = {};
    client.events = new Discord.Collection();
    client.commands.messageCommands = new Discord.Collection();
    client.commands.messageCommands.aliases = new Discord.Collection();
    client.commands.contextMenus = new Discord.Collection();
    client.commands.slashCommands = new Discord.Collection();
    client.commands.buttonCommands = new Discord.Collection();
    client.commands.selectMenus = new Discord.Collection();

    const Handler = require(`${path}/Src/Structures/Handlers/Handler`);
    await Handler.loadMessageCommands(client, path);
    await Handler.loadEvents(client);
    await client.login(config.token);
    await Handler.loadSlashCommands(client, path);
    await Handler.loadContextMenus(client, path);
    await Handler.loadButtonCommands(client, path);
    await Handler.loadSelectMenus(client, path);
})()