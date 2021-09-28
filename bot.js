const { Collection, Client, Discord, MessageEmbed, Intents} = require('discord.js')
const { Handler } = require(`${__dirname}/Access Files/Classes/Handler`)
const client = new Client({e
    intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
],
})
global.rootPATH = __dirname
client.config = require(`${rootPATH}/config.json`)
exports.client = client
client.commands = new Collection()
client.aliases = new Collection()

Handler.loadCommands()     // COMMAND HANDLER
Handler.loadEvents()     // EVENT HANDLER
Handler.loadButtons()     // BUTTON HANDLER
Handler.loadSelectMenus()     // SELECTMENUS HANDLER
Handler.loadErrorManager()     // ERRORHANDLER HANDLER

client.login(client.config.token)