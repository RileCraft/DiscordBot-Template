module.exports = {
    name: "call",
    run: async(client, message, args, Discord) => {
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageSelectMenu()
					.setCustomId('test')
					.setPlaceholder('Open me ;)')
					.addOptions([
                        {
                            label: 'Example',
							description: 'Test Command.',
							value: 'example',
                        }
                    ])
                    )
                    message.reply({
                        content: "E",
                        components: [row],
                        allowedMentions: {
                            repliedUser: false
                        }
                    })
                }
            }