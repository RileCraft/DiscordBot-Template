module.exports = {
	name: "error",
	execute: (client, error, message) {
		console.log(error)
		const embed = new MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true }))
.setTimestamp()
.setColor("RANDOM")
.setDescription(":x: Something went wrong!") 
message.channel.sendEmbed(embed)
		}
	}