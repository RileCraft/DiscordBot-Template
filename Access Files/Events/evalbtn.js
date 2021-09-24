module.exports = {
	name: 'clickButton',
	execute(button, message) {
		if (button.id === "evalbtn" && button.clicker.user.id === process.env.dev) {
			button.message.delete()
		}
	},
};