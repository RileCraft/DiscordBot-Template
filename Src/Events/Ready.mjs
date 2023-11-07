import { ActivityType } from "discord.js";
import chalk from "chalk";
import { fileURLToPath } from 'url';
import { join } from "path";
import { dirname } from 'path';
import { statSync } from "fs";
import { glob } from "glob";

export const name = "ready";
export const runOnce = true;
export const run = async (client) => {
    const rootPath = join(dirname(fileURLToPath(import.meta.url)), "../..");
    client.user.setActivity("Humans.", {
        type: ActivityType.Watching
    });

    const slashCommands = await glob(`${rootPath}/Src/Interactions/SlashCommands/**/*`);
    const allSlashCommands = slashCommands.filter(slash => !statSync(slash).isDirectory()).length;

    console.log(chalk.bold.green("[Client] ") + chalk.bold.blue(`Logged into ${client.user.tag}`));
    if (client.messageCommands.size > 0) console.log(chalk.bold.red("[MessageCommands] ") + chalk.bold.cyanBright(`Loaded ${client.messageCommands.size} MessageCommands with ${chalk.bold.white(`${client.messageCommands_Aliases.size} Aliases`)}.`));
    if (client.events.size > 0) console.log(chalk.bold.yellowBright("[Events] ") + chalk.bold.magenta(`Loaded ${client.events.size} Events.`));
    if (client.buttonCommands.size > 0) console.log(chalk.bold.whiteBright("[ButtonCommands] ") + chalk.bold.greenBright(`Loaded ${client.buttonCommands.size} Buttons.`));
    if (client.selectMenus.size > 0) console.log(chalk.bold.red("[SelectMenus] ") + chalk.bold.blueBright(`Loaded ${client.selectMenus.size} SelectMenus.`));
    if (client.modalForms.size > 0) console.log(chalk.bold.cyanBright("[ModalForms] ") + chalk.bold.yellowBright(`Loaded ${client.modalForms.size} Modals.`));
    if (allSlashCommands > 0) console.log(chalk.bold.magenta("[SlashCommands] ") + chalk.bold.white(`Loaded ${allSlashCommands} SlashCommands.`));
};