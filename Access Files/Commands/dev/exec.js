const { MessageButton } =require('discord-buttons')
module.exports = {
    name : 'exec',
    run : async(client, message, args, MessageEmbed) => {
    	let btn = new MessageButton()
    .setStyle("red")
    .setLabel("Delete Output")
    .setID("evalbtn")
            const { exec } = require("child_process")
            const prefix = client.config.prefix
            let lola = args.join(" ")
            if (!lola) return message.channel.send("Please provide what to execute in the terminal!")
            exec(`${lola}`, (error, stdout) => {
                let response = (error || stdout)
                if (error) {
                    const erro = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('🎄╎Terminal')
                        .setDescription(`\`\`\`kt
${error.message}\`\`\``)
                        .setTimestamp();
                    message.channel.send(erro, btn)
                } else {
                    const result = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('🎄╎Terminal')
                        .setDescription(`\`\`\`kt
${response}\`\`\``)
                        .setTimestamp();
                    message.channel.send(result, btn)
                }
            })
        
    }
}