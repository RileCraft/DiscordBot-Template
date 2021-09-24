module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const chalk = require('chalk')
		client.user.setActivity('Cookies get baked.', {
                type: `WATCHING`,
            });
    console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connected to ${client.user.tag}`))
    console.log(chalk.bold.blueBright("[Handler]") + chalk.bold.greenBright(` Loaded ${client.commands.size} commands.`))
    console.log(chalk.bold.cyanBright("[Handler]") + chalk.bold.magentaBright(` Loaded ${client.aliases.size} aliases.`))
	},
};