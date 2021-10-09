const { MessageEmbed } = require("discord.js")

// cooldown Embed Error
function cooldown(author, data) {
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(author.tag, author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setDescription(`Command avaliable again at <t:${data}:F>`)
    return embed;
}


// ownerOnly Embed Error
function ownerOnly(author) {
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(author.tag, author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setDescription("This command is reserved for the owners of the bot only!")
    return embed;
}


// userPermissions Embed Erro
function userPermissions(author, data) {
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("You are required to have these permissions to be able to run the command.")
        .setAuthor(author.tag, author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setDescription(data.toString())
    return embed;
}


// clientPermissions Embed Error
function clientPermissions(author, data) {
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("I'm required to have these permissions to be able to run the command.")
        .setAuthor(author.tag, author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setDescription(data.toString())
    return embed;
}


// anyUserPermissions Embed Error
function anyUserPermissions(author, data) {
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("You are required to have one of these permissions to be able to run the command.")
        .setAuthor(author.tag, author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setDescription(data.toString())
    return embed;
}


// anyClientPermissions Embed Error
function anyClientPermissions(author, data) {
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("I'm required to have one of these permissions to be able to run the command.")
        .setAuthor(author.tag, author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setDescription(data.toString())
    return embed;
}


// onlyUsers Embed Erro
function onlyUsers(author, data) {
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("This command is reserved for these users only.")
        .setAuthor(author.tag, author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setDescription(data.toString())
    return embed;
}


// onlyRoles Embed Error
function onlyRoles(author, data) {
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("This command is reserved for these roles only.")
        .setAuthor(author.tag, author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setDescription(data.toString())
    return embed;
}


// onlyChannels Embed Erro
function onlyChannels(author, data) {
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("This command is reserved for these channels only.")
        .setAuthor(author.tag, author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setDescription(data.toString())
    return embed;
}


// onlyGuilds Embed Error
function onlyGuilds(author, data) {
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("This command is reserved for these guilds only.")
        .setAuthor(author.tag, author.displayAvatarURL({
            dynamic: true
        }))
        .setTimestamp()
        .setDescription(data.toString())
    return embed;
}

module.exports = {
    cooldown,
    ownerOnly,
    userPermissions,
    clientPermissions,
    anyUserPermissions,
    anyClientPermissions,
    onlyUsers,
    onlyRoles,
    onlyChannels,
    onlyGuilds
}