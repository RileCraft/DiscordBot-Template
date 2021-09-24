const { Collection, Client, Discord, MessageEmbed } = require('discord.js')
let prefix = process.env.prefix
let token = process.env.token
const { Handler } = require(`${__dirname}/Access Files/Classes/Handler`)
require('@weky/inlinereply')
require('discord-reply')
const client = new Client({
    disableEveryone: true
})
client.login(token)
exports.client = client
global.rootPATH = __dirname
require('discord-buttons')(client)
client.commands = new Collection()
client.aliases = new Collection()

global.db = require("quick.db")
const env = require("dotenv").config()
const DisTube = require("distube")
client.distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, leaveOnFinish: true })

Handler.loadCommands()     // COMMAND HANDLER
Handler.loadEvents()     // EVENT HANDLER