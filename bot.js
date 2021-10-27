const { Collection, Client, Discord, MessageEmbed, Intents } = require('discord.js')
const chalk = require('chalk')
require("dotenv").config()
const client = new Client({
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
global.HOME = __dirname
client.config = require(`${HOME}/config.json`)
require('figlet')("DJS", (err, data) => console.log(data))
client.login(process.env.token || client.config.token)
client.cooldb = require("quick.db")
exports.client = client
global.HOME = __dirname
client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection()
client.events = new Collection()
client.selectMenus = new Collection()
client.buttonCommands = new Collection()

const { Handler } = require(`${HOME}/Home/Classes/Handler`)
Handler.loadCommands(client) // COMMAND HANDLER
Handler.loadEvents(client) // EVENT HANDLER
Handler.slashCount()
Handler.loadButtons(client) // BUTTON HANDLER
Handler.loadSelectMenus(client) // SELECTMENUS HANDLER
Handler.loadErrorManager(client) // ERRORHANDLER HANDLER