module.exports = {
	name: 'messageCreate',
	run: async(message) => {
		(async () => {
			const cooldb = require('quick.db')
			const { Collection } = require('discord.js')
			const Discord = require('discord.js')
			const { client } = require(HOME + "/bot")
			const prefix = process.env.prefix || client.config.prefix
if (!message.content.toString().startsWith(prefix)) return;
const cmd = message.content.toString().slice(prefix.length).trim().split(" ")[0]
if (!cmd) return;
let command = client.commands.get(cmd)
if (!command) command = client.commands.get(client.aliases.get(cmd));
if (command) {
    let args = message.content.slice(prefix.length).trim()
    if (args.startsWith(command.name)) args = args.slice(command.name.toString().length).trim().split(" ")
    else args = args.slice(command.aliases.toString().length).trim().split(" ")

    // Cooldown Handler
    if (command.cooldown) {
        let time = command.cooldown
        let id = message.author.id
        let date = Date.now()
        let data = cooldb.get(`${id}.${command.name}.cooldown`)
        if (isNaN(time)) throw new Error ("Invalid number in cooldown provided at " + command.name)
        if(Math.floor(date - data) >= time || !data) {
cooldb.set(`${id}.${command.name}.cooldown`, date)
command.run(client, message, args, Discord)
} else {
	if (command.returnError === false) return;
	const embed = new MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true }))
.setTimestamp()
.setColor("RANDOM")
.setDescription(`You are currently at cooldown for this command until <t:${Math.floor(Math.floor(data + time) / 1000)}:F>`)
	message.channel.sendEmbed(embed)
	}
  }

    // OwnerOnly Handler
    else if (command.ownerOnly) {
        if (message.author.id === client.config.dev || message.author.id === process.env.dev) command.run(client, message, args, Discord)
        else {
        	if (command.returnError === false) return;
            const ownerOnlyHandler = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle("❌╎ This command is to be used by the developers / owners of the bot only!");
            message.channel.sendEmbed(ownerOnlyHandler)
        }
    }

    // User Permission Handler
    else if (command.userPermissions && Array.isArray(command.permissions)) {
        let user = message.member
        let perms = command.permissions
        let check = 0
        let missingPerm = []
        perms.forEach(i => {
            if (user.permissions.has(i)) check++
            else missingPerm.push(`\n• ${i}`)
        })
        if (check === perms.length) command.run(client, message, args, Discord)
        else {
        	if (command.returnError === false) return;
            const permHandler = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle("❌╎ You are currently missing these permissions which are required for this command.")
                .setDescription(`${missingPerm}`)
            message.channel.sendEmbed(permHandler)
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
        if (check === perms.length) command.run(client, message, args, Discord)
        else {
        	if (user.permissions.has("SEND_MESSAGES")) {
        	if (command.returnError === false) return;
            const permHandler = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle("❌╎ I am currently missing these permissions which are required for this command.")
                .setDescription(`${missingPerm}`)
            message.channel.sendEmbed(permHandler)
            } else console.log("❌╎ I am currently missing these permissions which are required for this command." + missingPerm)
        }
    }

    // GuildOnly Handler
    else if (command.guildOnly === false) {
        command.run(client, message, args, Discord)
    } 
      
      // allowBots Handler
    else if (command.allowBots) {
        command.run(client, message, args, Discord)
    } 

// onlyUsers Handler
else if (command.onlyUsers && Array.isArray(command.onlyUsers)) {
let author = message.author.id
const missingUsers = []
let users = command.onlyUsers
if (users.some(id => id === author)) command.run(client, message, args, Discord)
else {
	users.forEach(i => missingUsers.push(`\n• <@${i}>`))
	if (command.returnError === false) return;
const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(":x: This command is reserved for these users")
                .setDescription(`${missingUsers}`)
            message.channel.sendEmbed(embed)
}
    }
    
    // onlyRoles Handler
else if (command.onlyRoles && Array.isArray(command.onlyRoles)) {
	(async () => {
let authid = message.author.id
let roles = command.onlyRoles
let auth = message.member
const missingRoles = []
if (!message.guild) return;
if (!auth) await message.guild.members.fetch(authid)
if (roles.some(id => auth.roles.cache.has(id))) command.run(client, message, args, Discord)
else {
	roles.forEach(i => missingRoles.push(`\n• <@&${i}>`))
	if (command.returnError === false) return;
const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(":x: This command is reserved for these roles")
                .setDescription(`${missingRoles}`)
            message.channel.sendEmbed(embed)
}
})()
    }
    
    // onlyChannels Handler
else if (command.onlyChannels && Array.isArray(command.onlyChannels)) {
	(async () => {
let msg = message.channel.id
let channels = command.onlyChannels
const missingChannels = []
if (!message.guild) return;
if (!msg) await message.guild.channels.fetch(msg)
if (channels.some(id => id === msg)) command.run(client, message, args, Discord)
else {
	channels.forEach(i => missingChannels.push(`\n• <#${i}>`))
	if (command.returnError === false) return;
const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(":x: This command is reserved for these channels")
                .setDescription(`${missingChannels}`)
            message.channel.sendEmbed(embed)
}
})()
    }
    
    // onlyGuilds Handler
else if (command.onlyGuilds && Array.isArray(command.onlyGuilds)) {
	(async () => {
let server = message.guild.id
let guilds = command.onlyGuilds
const missingGuilds = []
if (!message.guild) return;
if (guilds.some(id => id === server)) command.run(client, message, args, Discord)
else {
	guilds.forEach(i => {
		(async () => {
		if (!client.guilds.cache.get(i)) await client.guilds.fetch(i)
missingGuilds.push(`\n• ${client.guilds.cache.get(i).name}`)
    })()
})
	if (command.returnError === false) return;
const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(":x: This command is reserved for these guilds.")
                .setDescription(`${missingGuilds}`)
            message.channel.sendEmbed(embed)
}
})()
    }

else {
        // If none of the handlers are there.
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.member) message.member = await message.guild.fetchMember(message);
        command.run(client, message, args, Discord)
    }
}
})()
   }
}