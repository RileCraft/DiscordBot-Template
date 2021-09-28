module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const chalk = require('chalk')
		client.user.setActivity('Termux.', {
                type: `WATCHING`,
            });
            const info = require(rootPATH + "/Access Files/Classes/Handler")
    console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connected to ${client.user.tag}`))
    if (info.loadedCmds.length > 0) console.log(chalk.bold.redBright("[Handler]") + chalk.bold.greenBright(` Loaded ${info.loadedCmds[info.loadedCmds.length - 1] } commands.`))
    if (info.loadedAliases.length > 0) console.log(chalk.bold.whiteBright("[Handler]") + chalk.bold.magentaBright(` Loaded ${info.loadedAliases[info.loadedAliases.length - 1] } aliases.`))
    if (info.loadedEvents.length > 0) console.log(chalk.bold.greenBright("[Handler]") + chalk.bold.cyanBright(` Loaded ${info.loadedEvents[info.loadedEvents.length - 1] } events.`))
    if (info.loadedButtons.length > 0) console.log(chalk.bold.yellow("[Handler]") + chalk.bold.blue(` Loaded ${info.loadedButtons[info.loadedButtons.length - 1] } buttons.`))
    if (info.loadedSelectMenus.length > 0) console.log(chalk.bold.white("[Handler]") + chalk.bold.green(` Loaded ${info.loadedSelectMenus[info.loadedSelectMenus.length - 1] } selectMenus.`))
	},
};