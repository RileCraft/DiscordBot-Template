const fs = require('fs')
const glob = require("glob")
let { FileManager } = require(HOME + "/Home/Functions/FileManager")

let commandFiles = []
let aliasesCount = []
let eventFiles = []
let buttonFiles = []
let selectMenuFiles = []
let slashFiles = []
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
                commandFiles.push(file)
                if (cmd.aliases && Array.isArray(cmd.aliases)) cmd.aliases.forEach(alias => {
                    client.aliases.set(alias.toString().toLowerCase(), cmd.name)
                    aliasesCount.push(1)
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
                eventFiles.push(file)
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
                buttonFiles.push(file)
            }) // forEach File 
        }) // FileManager Function
    } // Button Handler End

    static loadSelectMenus(client) {
        FileManager(HOME + '/Home/CMDFiles/SelectMenus', function(err, res) {
            res.forEach(file => {
                if (fs.statSync(file).isDirectory()) return;
                selectMenuFiles.push(file)
            }) //res.forEach
        }) //Function End
    } // SelectMenus End

    static loadSlashCommands(client) {
        FileManager(HOME + '/Home/CMDFiles/SlashCmds', function(err, res) {
            res.forEach(file => {
                if (fs.statSync(file).isDirectory()) return;
                const cmd = require(file)
                const server = client.guilds.cache.get(cmd.guild)
                if (server) {
                    if (server.commands.cache.find(x => x.name === cmd.name)) {
                        server.commands.edit(server.commands.cache.find(x => x.name === cmd.name).id, {
                            name: cmd.name,
                            description: cmd.description ?? "Slash command :D",
                            options: cmd.options ?? [],
                            type: cmd.type ?? "CHAT_INPUT"
                        })
                    } else {
                        server.commands.create({
                            name: cmd.name,
                            description: cmd.description ?? "Slash command :D",
                            options: cmd.options ?? [],
                            type: cmd.type ?? "CHAT_INPUT"
                        })
                    }
                } else {
                    if (client.application.commands.cache.find(x => x.name === cmd.name)) {
                        server.commands.edit(client.application.commands.cache.find(x => x.name === cmd.name).id, {
                            name: cmd.name,
                            description: cmd.description ?? "Slash command :D",
                            options: cmd.options ?? [],
                            type: cmd.type ?? "CHAT_INPUT"
                        })
                    } else {
                        client.application.commands.create({
                            name: cmd.name,
                            description: cmd.description ?? "Slash command :D",
                            options: cmd.options ?? [],
                            type: cmd.type ?? "CHAT_INPUT"
                        })
                    }
                }
                slashFiles.push(file)
            }) // res.foreach() end
        }) // filemanager end
    } // SlashCmds end

    static getSlashCount() {
        FileManager(HOME + '/Home/CMDFiles/SlashCmds', function(err, res) {
            res.forEach(file => {
                if (fs.statSync(file).isDirectory()) return
                slashCount.push(1)
            })
        })
    }

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
    commandFiles,
    eventFiles,
    aliasesCount,
    buttonFiles,
    selectMenuFiles,
    slashFiles,
    slashCount
}