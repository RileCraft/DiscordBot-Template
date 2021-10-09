module.exports = {
    name: 'reload',
    ownerOnly: true,
    run: async (client, message, args, Discord) => {
        const glob = require('glob')
        const prefix = process.env.prefix || client.config.prefix
        let { FileManager } = require(HOME + "/Home/Functions/FileManager")
        client.commands.sweep(() => true)
        FileManager(HOME + '/Home/CMDFiles/Commands', function(err, res) {
            if (err) {
                const TheOno = new Discord.MessageEmbed()
                    .setTitle("❌╎ Reload Error")
                    .setDescription(`\`\`\`${err.stack}\`\`\``)
                    .setColor("ff0000")
                    .setFooter(client.user.username, client.user.displayAvatarURL({
                        dynamic: true
                    }))
                message.reply({
                    embeds: [TheOnO]
                })
            } else {
                res.forEach(file => {
                    let fs = require('fs')
                    if (fs.statSync(file).isDirectory()) return;
                    delete require.cache[require.resolve(file)];
                    let pull = require(file);
                    client.commands.set(pull.name.toString().toLowerCase(), pull)
                    if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias.toString().toLowerCase(), pull.name))
                })
            }
        })

        const TheEnd = new Discord.MessageEmbed()
            .setTitle('Reload Success!')
            .setColor('GREEN')
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL({
                dynamic: true
            }))
        message.reply({
            embeds: [TheEnd]
        })


    }
}