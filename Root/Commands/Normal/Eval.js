module.exports = {
    name : 'eval',
    ownerOnly: true,
    run : async(client, message, args, Discord) => {
    	const row = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageButton()
					.setCustomId('evalbtn')
					.setLabel('Delete Output')
					.setStyle('DANGER'),
			);
        let txt = args.join(" ")
   const { inspect } = require('util')
   if(!txt) return message.channel.send("Please specify something to Evaluate")                                                                                           
   try{
       const evaled = eval(txt)
       let ff = inspect(evaled, { depth: 0})
       if (String(ff).length > 2000) ff = "Output is too long"
        message.reply({ content:`\`\`\`js\n${ff}\`\`\``, components: [row], allowedMentions: { repliedUser: false } })
   } catch (error){
       let embed1 = new Discord.MessageEmbed()
       .setTitle('Evaluation Error!')
       .setColor("RANDOM")
       .addField("❌╎ Error",`${error}`)
       message.channel.send({embeds: [embed1], components: [row] })
   }
   
    }
}
