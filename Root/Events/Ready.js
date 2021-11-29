module.exports = {
    name: "ready",
    run: async(client) => {
        const chalk = require("chalk")
        client.user.setActivity('Discord', {
            type: `WATCHING`,
        })
        console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connected to ${client.user.tag}`))
        if (client.commands.normal.size > 0) console.log(chalk.bold.redBright("[Handler]") + chalk.bold.greenBright(` Loaded ${client.commands.normal.size} commands.`))
        if (client.commands.normal.aliases.size > 0) console.log(chalk.bold.whiteBright("[Handler]") + chalk.bold.magentaBright(` Loaded ${client.commands.normal.aliases.size} aliases.`))
        if (client.events.size > 0) console.log(chalk.bold.greenBright("[Handler]") + chalk.bold.cyanBright(` Loaded ${client.events.size} events.`))
        if (client.commands.buttons.size > 0) console.log(chalk.bold.yellow("[Handler]") + chalk.bold.blue(` Loaded ${client.commands.buttons.size} buttons.`))
        if (client.commands.menus.size > 0) console.log(chalk.bold.white("[Handler]") + chalk.bold.green(` Loaded ${client.commands.menus.size} selectMenus.`))
        if (client.commands.slash.size > 0) console.log(chalk.bold.red("[Handler]") + chalk.bold.yellow(` Found ${client.commands.slash.size} slashCommands. Starting to load.`))
    }
}