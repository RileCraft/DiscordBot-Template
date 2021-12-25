module.exports = {
    name: "messageCreate",
    run: async(message, client) => {
        ROOT.config.prefix.forEach(prefix => {
            if (!message.content.toLowerCase().startsWith(prefix)) return;
            const cmdName = message.content.toString().toLowerCase().slice(prefix.length).trim().split(" ")[0]
            const command = client.commands.normal.get(cmdName) ?? client.commands.normal.get(client.commands.normal.aliases.get(cmdName))
            if (!command) return;
            const loadCommandOptions = require(`${ROOT.path}/Root/Classes/CommandOptions/loadCommandOptions`)
            if (command.allowBots) loadCommandOptions(client, message, command, false)
            else if (message.author.bot) return;
            else if (command.guildOnly == false) loadCommandOptions(client, message, command, false)
            else if (!message.guild) return;
           else loadCommandOptions(client, message, command, false)
        })
    }
}