module.exports = async function (client, message, command, isInteraction, interactionType) {
	if (!command) return;
    const Discord = require("discord.js")
    if (await require(`${ROOT.path}/Root/Classes/CommandOptions/Cooldown`)(client, message, command, isInteraction, interactionType, Discord)) return;
    else if (await require(`${ROOT.path}/Root/Classes/CommandOptions/OwnerOnly`)(message, command, Discord)) return;
    else if (await require(`${ROOT.path}/Root/Classes/CommandOptions/UserPermissions`)(message, command, Discord)) return;
    else if (await require(`${ROOT.path}/Root/Classes/CommandOptions/ClientPermissions`)(message, command, Discord)) return;
    else if (await require(`${ROOT.path}/Root/Classes/CommandOptions/AnyUserPermissions`)(message, command, Discord)) return;
    else if (await require(`${ROOT.path}/Root/Classes/CommandOptions/AnyClientPermissions`)(message, command, Discord)) return;
    else if (await require(`${ROOT.path}/Root/Classes/CommandOptions/RequiredRoles`)(message, command, Discord)) return;
    else if (await require(`${ROOT.path}/Root/Classes/CommandOptions/RequiredAnyRole`)(message, command, Discord)) return;
    else if (await require(`${ROOT.path}/Root/Classes/CommandOptions/OnlyChannels`)(message, command, Discord)) return;
    else if (await require(`${ROOT.path}/Root/Classes/CommandOptions/OnlyGuilds`)(message, command, Discord)) return;
    else if (await require(`${ROOT.path}/Root/Classes/CommandOptions/OnlyUsers`)(client, message, command, Discord)) return;
    else {
    if (isInteraction) command.run(client, message, Discord)
    else {
        ROOT.config.prefix.forEach(prefix => {
            if (!message.content.toLowerCase().startsWith(prefix)) return;
            const cmdName = message.content.toString().toLowerCase().slice(prefix.length).trim().split(" ")[0]
            const command = client.commands.normal.get(cmdName) ?? client.commands.normal.get(client.commands.normal.aliases.get(cmdName))
            if (!command) return;
            let args = message.content.slice(prefix.length).trim()
            if (args.toLowerCase().startsWith(cmdName)) args = args.slice(cmdName.length).trim().split(" ")
            command.run(client, message, args, Discord)
        })
    }
}
}