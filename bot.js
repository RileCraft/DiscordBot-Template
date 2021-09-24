const { Collection, Client, Discord, MessageEmbed } = require('discord.js')
let prefix = process.env.prefix
let token = process.env.token
const { Handler } = require(`${__dirname}/Access Files/Classes/Handler`)
const client = new Client({
    disableEveryone: true
})
client.login(token)
exports.client = client
global.rootPATH = __dirname
client.commands = new Collection()
client.aliases = new Collection()

Handler.loadCommands()     // LOAD COMMAND HANDLER
Handler.loadEvents()     // LOAD EVENT HANDLER