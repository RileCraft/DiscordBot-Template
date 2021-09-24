const { Collection, Client, Discord, MessageEmbed } = require('discord.js')
const { Handler } = require(`${__dirname}/Access Files/Classes/Handler`)
const client = new Client({
    disableEveryone: true
})
global.rootPATH = __dirname
client.config = require(`${rootPATH}/config.js`)[0]
exports.client = client
client.commands = new Collection()
client.aliases = new Collection()

Handler.loadCommands()     // LOAD COMMAND HANDLER
Handler.loadEvents()     // LOAD EVENT HANDLER

client.login(client.config.token)