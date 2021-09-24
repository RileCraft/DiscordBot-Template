module.exports = {
    name : 'reload',
    ownerOnly: true,
    run : async(client, message, args, MessageEmbed) => {
    	 const glob = require('glob')
    	const prefix = client.config.prefix
       let { FileManager } = require("../../Functions/FileManager")
                    
                    client.commands.sweep(() => true)
        FileManager(rootPATH + '/Access Files/commands', function (err, res) {
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
}