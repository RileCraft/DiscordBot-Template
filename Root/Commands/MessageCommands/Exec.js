const { exec } = require("child_process")
module.exports = {
    name: 'exec',
    ownerOnly: true,
    run: async (client, message, args, container) => {
        const row = new container.Discord.MessageActionRow()
        .addComponents(
            new container.Discord.MessageButton()
            .setCustomId('evalbtn')
            .setLabel('Delete Output')
            .setStyle('DANGER')
            )
            let lola = args.join(" ")
            if (!lola) return message.channel.send("Please provide what to execute in the terminal!")
            exec(`${lola}`, (error, stdout) => {
                let response = (error || stdout)
                if (error) {
                    message.channel.send({
                        content:`\`\`\`js\n${error.message}\n\`\`\``,
                        components: [row]
                    })
                } else {
                    message.channel.send({
                        content:`\`\`\`js\n${response}\n\`\`\``,
                        components: [row]
                    })
                }
            })
        }
    }