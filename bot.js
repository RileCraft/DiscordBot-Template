const { Collection, Client, Discord, MessageEmbed, Intents, Options} = require('discord.js')
const { Handler } = require(`${__dirname}/Home/Classes/Handler`)
const chalk = require('chalk')
require("dotenv").config()
const client = new Client({
	makeCache: Options.cacheEverything(),
    intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
],
partials: ["CHANNEL"]
})
client.config = require(`${HOME}/config.json`)
require('figlet')("DjS", (err, data) => console.log(data))
client.login(process.env.token || client.config.token)
exports.client = client
global.HOME = __dirname
client.commands = new Collection()
client.aliases = new Collection()

Handler.loadCommands(client)    // COMMAND HANDLER
Handler.loadEvents(client)     // EVENT HANDLER
Handler.loadButtons(client)     // BUTTON HANDLER
Handler.loadSelectMenus(client)     // SELECTMENUS HANDLER
Handler.getSlashCount() // TO GET SLASH COUNT.
Handler.loadErrorManager(client)     // ERRORHANDLER HANDLER