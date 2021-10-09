module.exports = {
    name: 'ready',
    once: true,
    run: async (client) => {
        const chalk = require('chalk')
        client.user.setActivity('your servers.', {
            type: `WATCHING`,
        });
        const info = require(HOME + "/Home/Classes/Handler")
        info.Handler.loadSlashCommands(client) // SLASHCMDS HANDLER, MUST BE IN READY EVENT.
        console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connected to ${client.user.tag}`))
        if (info.commandFiles.length > 0) console.log(chalk.bold.redBright("[Handler]") + chalk.bold.greenBright(` Loaded ${info.commandFiles.length} commands.`))
        if (info.aliasesCount.length > 0) console.log(chalk.bold.whiteBright("[Handler]") + chalk.bold.magentaBright(` Loaded ${info.aliasesCount.length} aliases.`))
        if (info.eventFiles.length > 0) console.log(chalk.bold.greenBright("[Handler]") + chalk.bold.cyanBright(` Loaded ${info.eventFiles.length} events.`))
        if (info.buttonFiles.length > 0) console.log(chalk.bold.yellow("[Handler]") + chalk.bold.blue(` Loaded ${info.buttonFiles.length} buttons.`))
        if (info.selectMenuFiles.length > 0) console.log(chalk.bold.white("[Handler]") + chalk.bold.green(` Loaded ${info.selectMenuFiles.length} selectMenus.`))
        if (info.slashCount.length > 0) console.log(chalk.bold.red("[Handler]") + chalk.bold.yellow(` Loaded ${info.slashCount.length} slashCommands.`))
    },
};