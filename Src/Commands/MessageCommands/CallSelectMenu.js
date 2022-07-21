module.exports = {
    name: "call",
    run: async(client, message, args, container) => {
        const row = new container.Discord.ActionRowBuilder().addComponents(
            new container.Discord.SelectMenuBuilder()
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