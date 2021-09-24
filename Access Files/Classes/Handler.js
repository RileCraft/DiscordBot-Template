const fs = require('fs')
const glob = require("glob")
let { FileManager } = require("../Functions/FileManager")
let loadedEvents = 0
let loadedCmds = 0
let loadedAliases = 0

class Handler {
	   // COMMAND HANDLER
	static loadCommands() {
		const { client } = require(rootPATH + "/bot")
		   FileManager(rootPATH + '/Access Files/Commands', function (err, res) {
  res.forEach(file => {
     if (fs.statSync(file).isDirectory()) return;
 const cmd = require(file)
      client.commands.set(cmd.name, cmd)
      loadedCmds++
if(cmd.aliases && Array.isArray(cmd.aliases)) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name) loadedAliases++)
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
       loadedEvents++
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