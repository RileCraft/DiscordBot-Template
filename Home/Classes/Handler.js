const fs = require('fs')
const glob = require("glob")
let { FileManager } = require(HOME + "/Home/Functions/FileManager")
let slashCount = []
const Discord = require('discord.js')
Discord.TextChannel.prototype.sendEmbed = function(embed) {
    this.send({
        embeds: [embed]
    })
}

class Handler {
    // COMMAND HANDLER
    static loadCommands(client) {
        FileManager(HOME + '/Home/CMDFiles/Commands', function(err, res) {
            res.forEach(file => {
                if (fs.statSync(file).isDirectory()) return;
                const cmd = require(file)
                client.commands.set(cmd.name.toString().toLowerCase(), cmd)
                if (cmd.aliases && Array.isArray(cmd.aliases)) cmd.aliases.forEach(alias => {
                    client.aliases.set(alias.toString().toLowerCase(), cmd.name)
                }) // res.ForEach() End
            }) // forEach(aliases =>) End
        }) // FileManager Function End
    } // Command Handler End.

    // EVENT HANDLER
    static loadEvents(client) {
        FileManager(HOME + '/Home/Events', function(err, res) {
            res.forEach(file => {
                if (fs.statSync(file).isDirectory()) return;
                let event = require(file)
                client.events.set(event.name, event)
                if (event.custom) event.run(client)
                if (event.once) client.once(event.name, (...args) => event.run(...args, client))
                else client.on(event.name, (...args) => event.run(...args, client))
            }) // res.ForEach() End
        }) // FileManager Function End
    } // Event Handler End.

    static loadButtons(client) {
        FileManager(HOME + '/Home/CMDFiles/Buttons', function(err, res) {
            res.forEach(file => {
                if (fs.statSync(file).isDirectory()) return;
                const mm = require(file)
                client.buttonCommands.set(mm.name, mm)
            }) // forEach File 
        }) // FileManager Function
    } // Button Handler End

    static loadSelectMenus(client) {
        FileManager(HOME + '/Home/CMDFiles/SelectMenus', function(err, res) {
            res.forEach(file => {
                if (fs.statSync(file).isDirectory()) return;
                const btn = require(file)
                client.selectMenus.set(btn.name, btn)
            }) //res.forEach
        }) //Function End
    } // SelectMenus End

static slashCount() {
	FileManager(HOME + '/Home/CMDFiles/SlashCmds', function(err, res) {
            res.forEach(file => {
            	if (fs.statSync(file).isDirectory()) return;
            	slashCount.push(file)
            	})
            })
	}

    static loadSlashCommands(client) {
    client.slashCommands.clear()
    FileManager(HOME + '/Home/CMDFiles/SlashCommands', function(err, res) {
        res.forEach(file => {
            if (fs.statSync(file).isDirectory()) return;
            const cmd = require(file)
            client.slashCommands.set(cmd.name, cmd)
            let creator = ""
            if (client.slashCommands.get(cmd.name)?.guild) creator = client.guilds.cache.get(client.slashCommands.get(cmd.name).guild)
            else creator = client.application

            if (Array.isArray(client.slashCommands.get(cmd.name)?.guild)) {
                client.slashCommands.get(cmd.name)?.guild.forEach(x => {
                    let guild = client.guilds.cache.get(x)
                    if (!guild) return;
                    if (guild.commands.cache.find(x => x.name == client.slashCommands.get(cmd.name).name)) creator.commands.edit(creator.commands.cache.find(x => x.name == client.slashCommands.get(cmd.name).name).id, {
                        name: client.cmmands.get(cmd.name).name,
                        description: client.slashCommands.get(cmd.name).description ?? "Slash command :D",
                        options: client.slashCommands.get(cmd.name).options ?? [],
                        type: client.slashCommands.get(cmd.name).type ?? "CHAT_INPUT"
                    })
                    else guild.commands.create({
                        name: client.slashCommands.get(cmd.name).name,
                        description: client.slashCommands.get(cmd.name).description ?? "Slash command :D",
                        options: client.slashCommands.get(cmd.name).options ?? [],
                        type: client.slashCommands.get(cmd.name).type ?? "CHAT_INPUT"
                })
                })
            } else {
                if (creator.commands.cache.find(x => x.name == client.slashCommands.get(cmd.name).name)) creator.commands.edit(creator.commands.cache.find(x => x.name == client.slashCommands.get(cmd.name).name).id, {
                    name: client.cmmands.get(cmd.name).name,
                    description: client.slashCommands.get(cmd.name).description ?? "Slash command :D",
                    options: client.slashCommands.get(cmd.name).options ?? [],
                    type: client.slashCommands.get(cmd.name).type ?? "CHAT_INPUT"
                })
                else creator.commands.create({
                    name: client.slashCommands.get(cmd.name).name,
                    description: client.slashCommands.get(cmd.name).description ?? "Slash command :D",
                    options: client.slashCommands.get(cmd.name).options ?? [],
                    type: client.slashCommands.get(cmd.name).type ?? "CHAT_INPUT"
                })
            } // else End
        }) // res.foreach() end
    }) // filemanager end
} // SlashCommandz end

    static loadErrorManager() {
        const chalk = require('chalk')
        process.on('unhandledRejection', error => {
            const err = error.stack.split("\n")
            console.log(chalk.bold.red("[Error Message] ") + chalk.blue(err[0].trim()))
            console.log(chalk.bold.red("[Error Location] ") + chalk.blue(err[1].trim()))
        }) // Process End
        process.on('uncaughtException', error => {
            const err = error.stack.split("\n")
            console.log(chalk.bold.red("[Error Message] ") + chalk.blue(err[0].trim()))
            console.log(chalk.bold.red("[Error Location] ") + chalk.blue(err[1].trim()))
        }) // Process End
    } // LoadErrorManager End
} // Class End

module.exports = {
    Handler,
    slashCount
}