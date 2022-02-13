module.exports = {
    name: "call",
    run: async(client, message, args, container) => {
        const row = new container.Discord.MessageActionRow().addComponents(
            new container.Discord.MessageSelectMenu()
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