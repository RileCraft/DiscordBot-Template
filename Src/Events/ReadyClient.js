const { ActivityType } = require("discord.js");
const chalk = require("chalk");
module.exports = {
    name: "ready",
    runOnce: true,
    run: async (DiscordClient) => {
        DiscordClient.user.setActivity("I will take over the world", {
            type: ActivityType.Listening
        });

        console.log(chalk.bold.green(`Logging into ${DiscordClient.user.tag}.`))
        if (DiscordClient.messageCommands.size > 0) console.log(chalk.bold.blue("[MessageCommands]", `Loading ${DiscordClient.messageCommands.size} MessageCommands with ${DiscordClient.messageCommands_Aliases.size} Aliases.`))
        if (DiscordClient.events.size > 0) console.log(chalk.bold.yellow("[EventManager]", `Loading ${DiscordClient.events.size} Events.`))
        if (DiscordClient.buttonCommands.size > 0) console.log(chalk.bold.magenta("[ButtonCommands]", `Loading ${DiscordClient.buttonCommands.size} ButtonCommands.`))
        if (DiscordClient.selectMenus.size > 0) console.log(chalk.hex("#5B5F13").bold("[SelectMenus]", `Loading ${DiscordClient.selectMenus.size} SelectMenus.`))
        if (DiscordClient.slashCommands.size > 0) console.log(chalk.hex("#3535FF").bold("[SlashCommands]", `Loading ${DiscordClient.slashCommands.size} SlashCommands.`))
        if (DiscordClient.contextMenus.size > 0) console.log(chalk.hex("#44FF00").bold("[ContextMenus]", `Loading ${DiscordClient.contextMenus.size} ContextMenus.`))
        if (DiscordClient.modalForms.size > 0) console.log(chalk.hex("#067A00").bold("[ModalForms]", `Loading ${DiscordClient.modalForms.size} Modal Forms.`))
    } 
}