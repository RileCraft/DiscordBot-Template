const { MessageEmbed } = require('discord.js')
const { exec } = require("child_process")
module.exports = {
    name : 'reload',
    usage: "nom reload",
    ownerOnly: true,
description: "Pulls github repo and loads or updates changes in commands.",
    run : async(client, message, args) => {
    	 const glob = require('glob')
    	const prefix = process.env.prefix
            exec(`git pull $url`, (error, stdout) => {
                let response = (error || stdout)
                if (error) {
                    const erro = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('🎄╎ Terminal')
                        .setDescription(`\`\`\`kt${error.message}\`\`\``)
                        .setTimestamp();
                    message.channel.send(erro)
                } else {
                    let Handler = function (src, callback) {
  glob(src + '/**/*', callback);
}
let { requiredPath } = require("../../bot")
                    
                    client.commands.sweep(() => true)
        Handler(requiredPath + '/commands', function (err, res) {
            if (err) return message.reply(
                new MessageEmbed()
                    .setTitle("❌╎ Reload Error")
                    .setDescription(`\`\`\`${err.stack}\`\`\``)
                    .setColor("ff0000")
                    .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            );
            res.forEach(file => {
            	let fs = require('fs')
            	if (fs.statSync(file).isDirectory()) return;
                delete require.cache[require.resolve(file)];
                let pull = require(file);
                client.commands.set(pull.name, pull)
  if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
            })
        })

        message.reply(
            new MessageEmbed()
                .setTitle('Reload Success!')
                .setColor('GREEN')
                .setTimestamp()
                .setDescription(`\`\`\`kt
${response}\`\`\``)
                .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        )
                }
            })
        
    }
}