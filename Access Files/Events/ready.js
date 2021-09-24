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
    console.log(chalk.bold.blueBright("[Handler]") + chalk.bold.greenBright(` Loaded ${info.loadedCmds} commands.`))
    console.log(chalk.bold.cyanBright("[Handler]") + chalk.bold.magentaBright(` Loaded ${info.loadedAliases} aliases.`))
    console.log(chalk.bold.greenBright("[Handler]") + chalk.bold.greyBright(` Loaded ${info.loadedEvents} events.`))
	},
};