module.exports = {
    name : 'exec',
    run : async(client, message, args, MessageEmbed, MessageActionRow, MessageButton) => {
    	const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('evalbtn')
					.setLabel('Delete Output')
					.setStyle('DANGER'),
			);
            const { exec } = require("child_process")
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
                    message.channel.send({ embeds:[erro], components: [row] })
                } else {
                    const result = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('🎄╎Terminal')
                        .setDescription(`\`\`\`kt
${response}\`\`\``)
                        .setTimestamp();
                    message.channel.send({ embeds:[result], components: [row] })
                }
            })
        
    }
}