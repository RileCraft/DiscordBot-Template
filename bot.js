const { Collection, Client, Discord, MessageEmbed, Intents} = require('discord.js')
const { Handler } = require(`${__dirname}/Home/Classes/Handler`)
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
global.HOME = __dirname
require('figlet')("PogBot", (err, data) => console.log(data)) // Replace PogBot with ur bot name.
client.config = require(`${HOME}/config.json`)
exports.client = client
client.commands = new Collection()
client.aliases = new Collection()

Handler.loadCommands()     // COMMAND HANDLER
Handler.loadEvents()     // EVENT HANDLER
Handler.loadButtons()     // BUTTON HANDLER
Handler.loadSelectMenus()     // SELECTMENUS HANDLER
Handler.loadErrorManager()     // ERRORHANDLER HANDLER

client.login(process.env.token || client.config.token)