(async () => {
    const Discord = require("discord.js");
    const config = require("./Config");
    const path = __dirname;
    const client = new Discord.Client({
        intents: [
            Discord.GatewayIntentBits.DirectMessages,
            Discord.GatewayIntentBits.GuildMembers,
            Discord.GatewayIntentBits.GuildPresences,
            Discord.GatewayIntentBits.GuildBans,
            Discord.GatewayIntentBits.Guilds,
            Discord.GatewayIntentBits.MessageContent,
            Discord.GatewayIntentBits.GuildInvites,
            Discord.GatewayIntentBits.GuildMessageReactions,
            Discord.GatewayIntentBits.GuildWebhooks,
            Discord.GatewayIntentBits.DirectMessageReactions,
            Discord.GatewayIntentBits.GuildIntegrations,
            Discord.GatewayIntentBits.GuildVoiceStates,
            Discord.GatewayIntentBits.GuildMessages
        ],
        partials: [
            Discord.Partials.GuildScheduledEvent, 
            Discord.Partials.Channel, 
            Discord.Partials.Message,
            Discord.Partials.User, 
            Discord.Partials.GuildMember,
            Discord.Partials.GuildPresences
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