module.exports = {
	name: 'ready',
	once: true,
	run: async(client) => {
		const chalk = require('chalk')
		client.user.setActivity('Discord', {
                type: `WATCHING`,
            });
            const info = require(`${HOME}/Home/Classes/Handler`)
            info.Handler.loadSlashCommands(client) // SLASHCMDS HANDLER, MUST BE IN READY EVENT.
    console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connected to ${client.user.tag}`))
    if (client.commands.size > 0) console.log(chalk.bold.redBright("[Handler]") + chalk.bold.greenBright(` Loaded ${client.commands.size} commands.`))
    if (client.aliases.size > 0) console.log(chalk.bold.whiteBright("[Handler]") + chalk.bold.magentaBright(` Loaded ${client.aliases.size} aliases.`))
    if (client.events.size > 0) console.log(chalk.bold.greenBright("[Handler]") + chalk.bold.cyanBright(` Loaded ${client.events.size} events.`))
    if (client.buttonCommands.size > 0) console.log(chalk.bold.yellow("[Handler]") + chalk.bold.blue(` Loaded ${client.buttonCommands.size} buttons.`))
    if (client.selectMenus.size > 0) console.log(chalk.bold.white("[Handler]") + chalk.bold.green(` Loaded ${client.selectMenus.size} selectMenus.`))
    if (info.slashCount.length > 0) console.log(chalk.bold.red("[Handler]") + chalk.bold.yellow(` Loaded ${info.slashCount.length} slashCommands.`))
	},
};