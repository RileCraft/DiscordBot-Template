module.exports = {
    name: 'messageCreate',
    run: async (message) => {
        (async () => {
            const Discord = require('discord.js')
            const { client } = require(HOME + "/bot")
            const embedLoader = require(HOME + "/Home/Storage/Data/ErrorEmbeds")
            const { validator } = require(HOME + "/Home/Classes/Validator")
            const data = require(HOME + "/Home/Classes/Validator")
            const prefix = process.env.prefix
            if (!message.content.toString().toLowerCase().startsWith(prefix)) return;
            const cmd = message.content.toString().toLowerCase().slice(prefix.length).trim().split(" ")[0]
            if (!cmd) return;
            let command = client.commands.get(cmd)
            if (!command) command = client.commands.get(client.aliases.get(cmd));
            if (command) {
                let args = message.content.slice(prefix.length).trim()
                if (args.toLowerCase().startsWith(command.name)) args = args.slice(command.name.length).trim().split(" ")
                else {
                    if (command.aliases && Array.isArray(command.aliases)) {
                        command.aliases.some(alias => {
                            if (args.toLowerCase().startsWith(alias)) args = args.slice(alias.length).trim().split(" ")
                        })
                    }
                }

                if (!validator.cooldown(command, message, false)) {
                    if (command.returnCooldownError === false || command.returnNoErrors) return;
                    else message.channel.send({
                        embeds: [embedLoader.cooldown(message.author, command, false)]
                    })
                } else if (!validator.ownerOnly(command, message, false)) {
                    if (command.returnOwnerOnlyError === false || command.returnNoErrors) return;
                    else message.channel.send({
                        embeds: [embedLoader.ownerOnly(message.author)]
                    })
                } else if (!validator.userPermissions(command, message, false)) {
                    if (command.returnUserPermissionsError === false || command.returnNoErrors) return;
                    else message.channel.send({
                        embeds: [embedLoader.userPermissions(message.author, data.missingUserPermissions)]
                    })
                } else if (!validator.clientPermissions(command, message, false)) {
                    if (command.returnClientPermissionsError === false || command.returnNoErrors) return;
                    else message.channel.send({
                        embeds: [embedLoader.clientPermissions(message.author, data.missingClientPermissions)]
                    })
                } else if (!validator.anyUserPermissions(command, message, false)) {
                    if (command.returnAnyUserPermissionsError === false || command.returnNoErrors) return;
                    else message.channel.send({
                        embeds: [embedLoader.anyUserPermissions(message.author, data.missingAnyUserPermissions)]
                    })
                } else if (!validator.anyClientPermissions(command, message, false)) {
                    if (command.returnAnyClientPermissionsError === false || command.returnNoErrors) return;
                    else message.channel.send({
                        embeds: [embedLoader.anyClientPermissions(message.author, data.missingAnyClientPermissions)]
                    })
                } else if (!validator.onlyUsers(command, message, false)) {
                    if (command.returnOnlyUsersError === false || command.returnNoErrors) return;
                    else message.channel.send({
                        embeds: [embedLoader.onlyUsers(message.author, data.missingUsers)]
                    })
                } else if (!validator.onlyRoles(command, message, false)) {
                    if (command.returnOnlyRolesError === false || command.returnNoErrors) return;
                    else message.channel.send({
                        embeds: [embedLoader.onlyRoles(message.author, data.missingRoles)]
                    })
                } else if (!validator.onlyChannels(command, message, false)) {
                    if (command.returnOnlyChannelsError === false || command.returnNoErrors) return;
                    else message.channel.send({
                        embeds: [embedLoader.onlyChannels(message.author, data.missingChannels)]
                    })
                } else if (!validator.onlyGuilds(command, message, false)) {
                    if (command.returnOnlyGuildsError === false || command.returnNoErrors) return;
                    else message.channel.send({
                        embeds: [embedLoader.onlyGuilds(message.author, data.missingGuilds)]
                    })
                } else {
                    if (command.guildOnly === false) command.run(client, message, args, Discord)
                    else if (!message.guild) return;
                    else if (command.allowBots) command.run(client, message, args, Discord)
                    else if (message.author.bot) return;
                    else command.run(client, message, args, Discord)
                }

                // End
            }
        })()
    }
}