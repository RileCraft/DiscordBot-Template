const { MessageEmbed } =require('discord.js')
const { MessageButton } =require('discord-buttons')
module.exports = {
    name : 'exec',
    usage: "nom exec [command]",
description: "Executes a command in the terminal.",
    run : async(client, message, args) => {
    	let btn = new MessageButton()
    .setStyle("red")
    .setLabel("Delete Output")
    .setID("evalbtn")
                const { MessageEmbed } = require('discord.js')
            const { exec } = require("child_process")
            const prefix = process.env.prefix
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