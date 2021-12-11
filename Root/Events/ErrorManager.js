module.exports = {
    name: "errorManager",
    customEvent: true,
    run: async(client) => {
        const chalk = require("chalk")
        process.on('unhandledRejection', error => {
            const err = error.stack.split("\n")
            console.log(chalk.bold.red("[Error Message] ") + chalk.greenBright(err[0].trim()))
            console.log(chalk.bold.red("[Error Location] ") + chalk.greenBright(err[1].trim()))
        })
        process.on('uncaughtException', error => {
            const err = error.stack.split("\n")
            console.log(chalk.bold.red("[Error Message] ") + chalk.greenBright(err[0].trim()))
            console.log(chalk.bold.red("[Error Location] ") + chalk.greenBright(err[1].trim()))
        })
    }
}