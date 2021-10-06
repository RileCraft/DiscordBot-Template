module.exports = {
	name: 'messageCreate',
	run: async(message) => {
		(async () => {
            const cooldb = require('quick.db')
			const { Collection } = require('discord.js')
			const Discord = require('discord.js')
			const { client } = require(HOME + "/bot")
			client.cooldb = cooldb
			const prefix = process.env.prefix || client.config.prefix
if (!message.content.toString().toLowerCase().startsWith(prefix)) return;
const cmd = message.content.toString().toLowerCase().slice(prefix.length).trim().split(" ")[0]
if (!cmd) return;
let command = client.commands.get(cmd)
if (!command) command = client.commands.get(client.aliases.get(cmd));
if (command) {
    let args = message.content.slice(prefix.length).trim()
    if (args.startsWith(command.name)) args = args.slice(command.name.toString().length).trim().split(" ")
    else args = args.slice(command.aliases.toString().length).trim().split(" ")
    
let cooldown_ok = true
let ownerOnly_ok = true
let userPermissions_ok = true
let clientPermissions_ok = true
let anyUserPermissions_ok = true
let anyClientPermissions_ok = true
let onlyUsers_ok = true
let onlyRoles_ok = true
let onlyChannels_ok = true
let onlyGuilds_ok = true

const missingUserPermissions = []
const missingClientPermissions = []
const missingAnyUserPermissions = []
const missingAnyClientPermissions = []
const missingUsers = []
const missingRoles = []
const missingChannels = []
const missingGuilds = []

    // Cooldown Handler
    if (command.cooldown) {
        let time = command.cooldown
        let id = message.author.id
        let date = Date.now()
        let data = cooldb.get(`${id}.${command.name}.cooldown`)
        if (isNaN(time)) throw new Error ("Invalid number in cooldown provided at " + command.name)
        if(Math.floor(date - data) >= time || !data) {
cooldb.set(`${id}.${command.name}.cooldown`, date)
} else cooldown_ok = false
	   } 

    // OwnerOnly Handler
    if (command.ownerOnly) {
        if (message.author.id === process.env.dev) ownerOnly_ok = true
        else ownerOnly_ok = false
    } 

    // User Permission Handler
    if (command.userPermissions) {
if (Array.isArray(command.userPermissions)) {
    	if (!message.guild) return;
        let user = message.member
        let perms = command.userPermissions
        let check = 0
        perms.forEach(i => {
            if (user.permissions.has(i)) check++
            else missingUserPermissions.push(`\n• ${i}`)
        })
        if (check === perms.length) userPermissions_ok = true
        else userPermissions_ok = false
 }
    } 
    
    // Client Permission Handler
    if (command.clientPermissions) {
if (Array.isArray(command.clientPermissions)) {
    	if (!message.guild) return;
        let user = message.guild.me
        let perms = command.clientPermissions
        let check = 0
        let missingPerm = []
        perms.forEach(i => {
            if (user.permissions.has(i)) check++
            else missingClientPermissions.push(`\n• ${i}`)
        })
        if (check === perms.length) clientPermissions_ok = true
        else clientPermissions_ok = false
  }
    } 

 // anyUserPermissions
 if (command.anyUserPermissions) {
if (Array.isArray(command.anyUserPermissions)) {
 	(async () => {
let perms = command.anyUserPermissions
let user = message.member.permissions.toArray()
if (!message.member) await message.guild.members.fetch(message.author.id)
if (perms.some(x => user.some(y => y === x))) anyUserPermissions_ok = true
else {
	anyUserPermissions_ok= false
	perms.forEach(i => missingAnyUserPermissions.push(`\n• ${i}`))
  }
       })()
  }
    } 

// anyClientPermissions
 if (command.anyClientPermissions) {
if (Array.isArray(command.anyClientPermissions)) {
 	(async () => {
let perms = command.anyClientPermissions
let user = message.guild.me.permissions.toArray()
if (!message.guild.me) await message.guild.members.fetch(client.user.id)
if (perms.some(x => user.some(y => y === x))) anyClientPermissions_ok = true
else {
	anyClientPermissions_ok = false
	perms.forEach(i => missingAnyClientPermissions.push(`\n• ${i}`))
	    }
})()
        }
    } 

    // onlyUsers Handler
if (command.onlyUsers) {
if (Array.isArray(command.onlyUsers)) {
let author = message.author.id
let users = command.onlyUsers
if (users.some(id => id === author)) onlyUsers_ok = true
else {
	onlyUsers_ok = false
	users.forEach(i => missingUsers.push(`\n• <@${i}>`))
	}
  }
    } 
    
    // onlyRoles Handler
if (command.onlyRoles) {
if (Array.isArray(command.onlyRoles)) {
	(async () => {
let authid = message.author.id
let roles = command.onlyRoles
let auth = message.member
if (!message.guild) return;
if (!auth) await message.guild.members.fetch(authid)
if (roles.some(id => auth.roles.cache.has(id))) onlyRoles_ok = true
else {
	onlyRoles_ok = false
	roles.forEach(i => missingRoles.push(`\n• <@&${i}>`))
      }
})()
 }
    } 
    
    // onlyChannels Handler
if (command.onlyChannels) {
if (Array.isArray(command.onlyChannels)) {
	(async () => {
let msg = message.channel.id
let channels = command.onlyChannels
if (!message.guild) return;
if (!msg) await message.guild.channels.fetch(msg)
if (channels.some(id => id === msg)) onlyChannels_ok = true
else {
	onlyChannels_ok = false
	channels.forEach(i => missingChannels.push(`\n• <#${i}>`))
}
   })()
}
    } 
    
    // onlyGuilds Handler
if (command.onlyGuilds) {
if (Array.isArray(command.onlyGuilds)) {
let server = message.guild.id
let guilds = command.onlyGuilds
if (!message.guild) return;
if (guilds.some(id => id === server)) onlyGuilds_ok = true
else {
	onlyGuilds_ok = false
	guilds.forEach(i => {
		(async () => {
		if (!client.guilds.cache.get(i)) await client.guilds.fetch(i)
missingGuilds.push(`\n• ${client.guilds.cache.get(i).name}`)
    })()
})
     }
}
    } 
    
// Validation Area
if (!cooldown_ok) {
	if (command.returnCooldownError === false) return;
	let time = command.cooldown
        let id = message.author.id
        let date = Date.now()
        let data = cooldb.get(`${id}.${command.name}.cooldown`)
const coolEmbed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true }))
.setTimestamp()
.setColor("RANDOM")
.setDescription(`You are currently at cooldown for this command until <t:${Math.floor(Math.floor(data + time) / 1000)}:F>`)
message.channel.sendEmbed(coolEmbed)
    }
    
else if (!ownerOnly_ok) {
	if (command.returnOwnerOnlyError === false) return;
	const ownEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("❌╎ This command is to be used by the developers / owners of the bot only!");
            message.channel.sendEmbed(ownEmbed)
	}

else if (!userPermissions_ok) {
	if (command.returnUserPermissionsError === false) return;
	const userPPEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("❌╎ You are currently missing these permissions which are required for this command.")
                .setDescription(`${missingUserPermissions}`)
                message.channel.sendEmbed(userPPEmbed)
	}

else if (!clientPermissions_ok) {
	if (command.returnClientPermissionsError === false) return;
	if (!message.guild.me.permissions.has("SEND_MESSAGES")) console.log("I'm Missing Send Messages permission.")
	const clientPPEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("❌╎ I am currently missing these permissions which are required for this command.")
                .setDescription(`${missingClientPermissions}`)
                message.channel.sendEmbed(clientPPEmbed)
	}

else if (!anyUserPermissions_ok) {
	if (command.returnAnyUserPermissionsError === false) return;
	const anyUserPermEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(":x: You are required to have one of these permissions to run the command.")
                .setDescription(`${missingAnyUserPermissions}`)
            message.channel.sendEmbed(anyUserPermEmbed)
	}

else if (!anyClientPermissions_ok) {
	if (command.returnAnyClientPermissionsError === false) return;
	if (!message.guild.me.permissions.has("SEND_MESSAGES")) console.log("I'm Missing Send Messages permission.")
	const anyClientPermEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(":x: I need one of these permissions to be able to run the command.")
                .setDescription(`${missingAnyClientPermissions}`)
            message.channel.sendEmbed(anyClientPermEmbed)
	}

else if (!onlyUsers_ok) {
	if (command.returnOnlyUsersError === false) return;
	const userEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(":x: This command is reserved for these users")
                .setDescription(`${missingUsers}`)
            message.channel.sendEmbed(userEmbed)
	}
	
else if (!onlyRoles_ok) {
	if (command.returnOnlyRolesError === false) return;
	const rolesEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(":x: This command is reserved for these roles")
                .setDescription(`${missingRoles}`)
            message.channel.sendEmbed(rolesEmbed)
	}

else if (!onlyChannels_ok) {
	if (command.returnOnlyChannelsError === false) return;
	const channelsEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(":x: This command is reserved for these channels")
                .setDescription(`${missingChannels}`)
            message.channel.sendEmbed(channelsEmbed)
	}

else if (!onlyGuilds_ok) {
	if (command.returnOnlyGuildsError === false) return;
	const guildsEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(":x: This command is reserved for these guilds.")
                .setDescription(`${missingGuilds}`)
            message.channel.sendEmbed(guildsEmbed)
	}

else {
	if (command.guildOnly === false) command.run(client, message, args, Discord)
	if (!message.guild) return;
	if (command.allowBots) command.run(client, message, args, Discord)
	if (message.author.bot) return;
	command.run(client, message, args, Discord)
}
// End
}
})()
   }
}