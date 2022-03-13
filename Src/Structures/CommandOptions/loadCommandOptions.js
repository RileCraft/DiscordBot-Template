const Discord = require("discord.js")
const { path, config } = require("../../../bot")
module.exports = async function (client, message, command, isInteraction, interactionType) {
    if (!command) return;
    const container = {
        RootPath: path,
        Config: config,
        Discord: Discord
    }
    if (await require("./Cooldown")(client, message, command, isInteraction, interactionType, Discord)) return;
    else if (await require("./OwnerOnly")(message, command, Discord)) return;
    else if (await require("./UserPermissions")(message, command, Discord)) return;
    else if (await require("./ClientPermissions")(message, command, Discord)) return;
    else if (await require("./AnyUserPermissions")(message, command, Discord)) return;
    else if (await require("./AnyClientPermissions")(message, command, Discord)) return;
    else if (await require("./RequiredAnyRole")(message, command, Discord)) return;
    else if (await require("./RequiredRoles")(message, command, Discord)) return;
    else if (await require("./OnlyChannels")(message, command, Discord)) return;
    else if (await require("./OnlyGuilds")(client, message, command, Discord)) return;
    else if (await require("./OnlyUsers")(client, message, command, Discord)) return;
    else {
        if (isInteraction) command.run(client, message, container)
        else {
            container.Config.prefix.forEach(prefix => {
                if (!message.content.toLowerCase().startsWith(prefix)) return;
                const cmdName = message.content.trim().toLowerCase().slice(prefix.length).trim().split(" ")[0]
                const command = client.commands.messageCommands.get(cmdName) ?? client.commands.messageCommands.get(client.commands.messageCommands.aliases.get(cmdName))
                if (!command) return;
                let args = message.content.slice(prefix.length).trim()
                if (args.toLowerCase().startsWith(cmdName)) args = args.slice(cmdName.length).trim().split(" ")
                command.run(client, message, args, container)
            })
        }
    }
}
