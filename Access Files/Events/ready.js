module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const chalk = require('chalk')
		client.user.setActivity('Discord Servers.', {
                type: `WATCHING`,
            });
            const info = require("../Classes/Handler")
    console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connected to ${client.user.tag}`))
    console.log(chalk.bold.redBright("[Handler]") + chalk.bold.greenBright(` Loaded ${info.loadedCmds[info.loadedCmds.length - 1] ?? 0} commands.`))
    console.log(chalk.bold.whiteBright("[Handler]") + chalk.bold.magentaBright(` Loaded ${info.loadedAliases[info.loadedAliases.length - 1] ?? 0} aliases.`))
    console.log(chalk.bold.greenBright("[Handler]") + chalk.bold.cyanBright(` Loaded ${info.loadedEvents[info.loadedEvents.length - 1] ?? 0} events.`))
	},
};