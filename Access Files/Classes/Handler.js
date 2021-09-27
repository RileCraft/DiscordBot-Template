const fs = require('fs')
const glob = require("glob")
let { FileManager } = require("../Functions/FileManager")
let Count_Cmds = 1
let Count_Aliases = 1
let Count_Events = 1
let Count_Buttons = 1
let Count_SelectMenus = 1

let loadedEvents = []
let loadedCmds = []
let loadedAliases = []
let loadedButtons = []
let loadedSelectMenus= []

const Discord = require('discord.js')
Discord.TextChannel.prototype.sendEmbed = function (embed) {
	this.send({ embeds: [embed] })
	}
	
 class Handler {
	   // COMMAND HANDLER
	static loadCommands() {
		const { client } = require(rootPATH + "/bot")
		   FileManager(rootPATH + '/Access Files/CMDFiles/Commands', function (err, res) {
  res.forEach(file => {
     if (fs.statSync(file).isDirectory()) return;
 const cmd = require(file)
      client.commands.set(cmd.name, cmd)
      loadedCmds.push(Count_Cmds++)
if(cmd.aliases && Array.isArray(cmd.aliases)) cmd.aliases.forEach(alias => {
client.aliases.set(alias, cmd.name) 
loadedAliases.push(Count_Aliases++)
}) // res.ForEach() End
  	}) // forEach(aliases =>) End
}) // FileManager Function End
		} // Command Handler End.
		
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
  	}) // res.ForEach() End
}) // FileManager Function End
			} // Event Handler End.
			
			  static loadButtons() {
				const { client } = require(rootPATH + "/bot")
				FileManager(rootPATH + '/Access Files/CMDFiles/Buttons', function (err, res) {
					res.forEach(file => {
						if (fs.statSync(file).isDirectory()) return;
						loadedButtons.push(Count_Buttons++)
						const cmd = require(file)
						 client.on("interactionCreate", button => {
							if (!button.isButton()) return;
						if (cmd.name !== button.customId) return;
						if (cmd.ownerOnly) {
                     if (button.user.id === client.config.dev) {
cmd.run(client, button)
   } else return ;
                      } // if OwnerOnly
                      
						    }) // Interaction Event End
					    }) // forEach File 
					}) // FileManager Function
				} // Button Handler End
			
			static loadSelectMenus() {
			const { client } = require(rootPATH + "/bot")
				FileManager(rootPATH + '/Access Files/CMDFiles/SelectMenus', function (err, res) {
					res.forEach(file => {
						if (fs.statSync(file).isDirectory()) return;
						const cmd = require(file)
						loadedSelectMenus.push(Count_SelectMenus++)
						 client.on("interactionCreate", menu => {
							if (!menu.isSelectMenu()) return;
						if (cmd.name === menu.customId || cmd.name === menu.values[0]) {
						if (cmd.ownerOnly) {
                     if (menu.user.id === client.config.dev) {
cmd.run(client, menu)
   } else return;
                      } else cmd.run(client, menu)
                      } else return;
						    }) // Interaction Event End
						}) //res.forEach
						}) //Function End
			} // SelectMenus End
			
			static loadErrorManager() {
			const chalk = require('chalk')
			process.on('unhandledRejection', error => {
const err = error.stack.split("\n")
console.log(chalk.bold.red("[Error Message] ") + chalk.bold.blue(err[0].trim()))
console.log(chalk.bold.red("[Error Location] ") + chalk.bold.blue(err[1].trim()))
		}) // Process End
			} // LoadErrorManager End
			
	} // Class End
	
module.exports = {
    Handler,
    loadedAliases,
    loadedCmds,
    loadedEvents,
    loadedButtons,
    loadedSelectMenus
}