import { ActivityType } from "discord.js";
import { rootPath } from "../../bot.js";
import { fileReader } from "../utils/fileReader.js";
import { t } from "tasai";

export const Event = {
    name: "ready",
    runOnce: true,
    run: async (client) => {
        client.user?.setActivity("Humans.", {
            type: ActivityType.Watching
        });

        let allSlashCommands = fileReader(`${rootPath}/src/interactions/slashCommands`);
        allSlashCommands = await allSlashCommands.reduce(async (array, slash) => {
            const command = (await import(`file:///${slash}`))?.Slash;
            if (command?.ignore || !command?.name) return array;
            else return (await array).concat(slash);
        }, []);

        let allContextMenus = fileReader(`${rootPath}/src/interactions/contextMenus`);
        allContextMenus = await allContextMenus.reduce(async (array, context) => {
            const command = (await import(`file:///${context}`))?.Context;
            if (command?.ignore || !command?.name || !command?.type) return array;
            else return (await array).concat(context);
        }, []);

        console.log(t.bold.green.toFunction()("[Client] ") + t.bold.blue.toFunction()(`Logged into ${client.user?.tag}`));
        if ((client.messageCommands.size ?? 0) > 0) console.log(t.bold.red.toFunction()("[MessageCommands] ") + t.bold.cyan.toFunction()(`Loaded ${(client.messageCommands.size ?? 0)} MessageCommands with ${t.bold.white.toFunction()(`${client.messageCommands_Aliases.size} Aliases`)}.`));
        if ((client.events.size ?? 0) > 0) console.log(t.bold.yellow.toFunction()("[Events] ") + t.bold.magenta.toFunction()(`Loaded ${(client.events.size ?? 0)} Events.`));
        if ((client.buttonCommands.size ?? 0) > 0) console.log(t.bold.brightGreen.toFunction()("[ButtonCommands] ") + t.bold.brightYellow.toFunction()(`Loaded ${(client.buttonCommands.size ?? 0)} Buttons.`));
        if ((client.selectMenus.size ?? 0) > 0) console.log(t.bold.red.toFunction()("[SelectMenus] ") + t.bold.brightBlue.toFunction()(`Loaded ${(client.selectMenus.size ?? 0)} SelectMenus.`));
        if ((client.modalForms.size ?? 0) > 0) console.log(t.bold.brightCyan.toFunction()("[ModalForms] ") + t.bold.brightYellow.toFunction()(`Loaded ${(client.modalForms.size ?? 0)} Modals.`));
        if (allSlashCommands?.length > 0) console.log(t.bold.magenta.toFunction()("[SlashCommands] ") + t.bold.white.toFunction()(`Loaded ${allSlashCommands.length} SlashCommands.`));
        if (allContextMenus?.length > 0) console.log(t.bold.magenta.toFunction()("[ContextMenus] ") + t.bold.white.toFunction()(`Loaded ${allContextMenus.length} ContextMenus.`));
    }
}; // Log all data about the client on login.