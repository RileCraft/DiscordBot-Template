module.exports = {
	name: 'message',
	execute(message) {
		(async () => {
			const { Collection, MessageEmbed } = require('discord.js')
			const Timeout = new Collection()
			const { client } = require("../../bot")
			const prefix = client.config.prefix
if (!message.content.toString().toLowerCase().startsWith(prefix)) return;
const cmd = message.content.toString().toLowerCase().slice(prefix.length).trim().split(" ")[0]
if (!cmd) return;
let command = client.commands.get(cmd)
if (!command) command = client.commands.get(client.aliases.get(cmd));
if (command) {
    let args = message.content.slice(prefix.length).trim()
    if (args.startsWith(command.name)) args = args.slice(command.name.toString().length).trim().split(" ")
    else args = args.slice(command.aliases.toString().length).trim().split(" ")

    // Timeout Handler
    if (command.timeout) {
        if (Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`You are on a \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` cooldown.`)
        command.run(client, message, args, db, MessageEmbed)
        Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
        setTimeout(() => {
            Timeout.delete(`${command.name}${message.author.id}`)
        }, command.timeout)
    }

    // OwnerOnly Handler
    else if (command.ownerOnly) {
        if (message.author.id === process.env.dev) command.run(client, message, args, db, MessageEmbed)
        else {
            const ownerOnlyHandler = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle("❌╎ This command is to be used by the developers / owners of the bot only!");
            message.channel.send(ownerOnlyHandler)
        }
    }

    // User Permission Handler
    else if (command.permissions && Array.isArray(command.permissions)) {
        let user = message.member
        let perms = command.permissions
        let check = 0
        let missingPerm = []
        perms.forEach(i => {
            if (user.permissions.has(i)) check++
            else missingPerm.push(`\n• ${i}`)
        })
        if (check === perms.length) command.run(client, message, args, db, MessageEmbed)
        else {
            const permHandler = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle("❌╎ You are currently missing these permissions which are required for this command.")
                .setDescription(`${missingPerm}`)
            message.channel.send(permHandler)
        }
    }
    
    // Client Permission Handler
    else if (command.clientPermissions && Array.isArray(command.clientPermissions)) {
        let user = message.guild.me
        let perms = command.clientPermissions
        let check = 0
        let missingPerm = []
        perms.forEach(i => {
            if (user.permissions.has(i)) check++
            else missingPerm.push(`\n• ${i}`)
        })
        if (check === perms.length) command.run(client, message, args, db, MessageEmbed)
        else {
        	if (user.permissions.has("SEND_MESSAGES")) {
            const permHandler = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle("❌╎ I am currently missing these permissions which are required for this command.")
                .setDescription(`${missingPerm}`)
            message.channel.send(permHandler)
            } else console.log("❌╎ I am currently missing these permissions which are required for this command." + missingPerm)
        }
    }

    // GuildOnly Handler
    else if (command.guildOnly === false) {
        command.run(client, message, args, db, MessageEmbed)
    } 
      
      // allowBots Handler
    else if (command.allowBots) {
        command.run(client, message, args, db, MessageEmbed)
    } else {
        // If none of the handlers are there.
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.member) message.member = await message.guild.fetchMember(message);
        command.run(client, message, args, db, MessageEmbed)
    }
}
})()
   }
}