const fs = require('fs')
const glob = require("glob")
let { FileManager } = require("../Functions/FileManager")
let Count_Cmds = 1
let Count_Aliases = 1
let Count_Events = 1
let loadedEvents = []
let loadedCmds = []
let loadedAliases = []

const Discord = require('discord.js')
Discord.TextChannel.prototype.sendEmbed = function (embed) {
	this.send({ embeds: [embed] })
	}

 class Handler {
	   // COMMAND HANDLER
	static loadCommands() {
		const { client } = require(rootPATH + "/bot")
		   FileManager(rootPATH + '/Access Files/Commands', function (err, res) {
  res.forEach(file => {
     if (fs.statSync(file).isDirectory()) return;
 const cmd = require(file)
      client.commands.set(cmd.name, cmd)
      loadedCmds.push(Count_Cmds++)
if(cmd.aliases && Array.isArray(cmd.aliases)) cmd.aliases.forEach(alias => {
client.aliases.set(alias, cmd.name) 
loadedAliases.push(Count_Aliases++)
})
  	})
})
		}
		// EVENT HANDLER
           static loadEvents() {
            	 const { client } = require(rootPATH + "/bot")
	 FileManager(rootPATH + '/Access Files/Events', function (err, res) {
            res.forEach(file => {
  if (fs.statSync(file).isDirectory()) return;
       let event = require(file)
    loadedEvents.push(Count_Events++)
if (event.once) client.once(event.name, (...args) => event.execute(...args, client))
    else client.on(event.name, (...args) => event.execute(...args, client))
  	}) 
})
			}
			
	}
	
module.exports = {
    Handler,
    loadedAliases,
    loadedCmds,
    loadedEvents
}