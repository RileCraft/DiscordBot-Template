module.exports = {
    name : 'selectMenu',
    run : async(client, message, args, Discord) => {
    	const menus = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'fun',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'option2',
						},
					]),
			);
			message.channel.send({ content:"e", components: [menus] })
    }
}     