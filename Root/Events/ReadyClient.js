const chalk = require("chalk")
module.exports = {
    name: "ready",
    once: true,
    run: async(client) => {
        client.user.setActivity('RileCraft.', {
            type: `WATCHING`,
        })
        console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connected to ${client.user.tag}`))
        if (client.commands.messageCommands.size > 0) console.log(chalk.bold.redBright("[Handler]") + chalk.bold.greenBright(` Loaded ${client.commands.messageCommands.size} commands.`))
        if (client.commands.messageCommands.aliases.size > 0) console.log(chalk.bold.whiteBright("[Handler]") + chalk.bold.magentaBright(` Loaded ${client.commands.messageCommands.aliases.size} aliases.`))
        if (client.events.size > 0) console.log(chalk.bold.greenBright("[Handler]") + chalk.bold.cyanBright(` Loaded ${client.events.size} events.`))
        if (client.commands.buttonCommands.size > 0) console.log(chalk.bold.yellow("[Handler]") + chalk.bold.blue(` Loaded ${client.commands.buttonCommands.size} buttons.`))
        if (client.commands.selectMenus.size > 0) console.log(chalk.bold.white("[Handler]") + chalk.bold.green(` Loaded ${client.commands.selectMenus.size} selectMenus.`))
        if (client.commands.slashCommands.size > 0) console.log(chalk.bold.red("[Handler]") + chalk.bold.yellow(` Found ${client.commands.slashCommands.size} slashCommands. Starting to load.`))
        if (client.commands.contextMenus.size > 0) console.log(chalk.bold.greenBright("[Handler]") + chalk.bold.cyanBright(` Found ${client.commands.contextMenus.size} contextMenus. Starting to load.`))
    }
}