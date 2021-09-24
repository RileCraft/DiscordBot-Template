module.exports = {
	name: 'clickButton',
	execute(button, client) {
		if (button.id === "evalbtn" && button.clicker.user.id === client.config.dev) {
			button.message.delete()
		}
	},
};