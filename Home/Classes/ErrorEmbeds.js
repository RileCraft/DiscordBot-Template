const { MessageEmbed } = require("discord.js")
const { client } = require(HOME + "/bot")

class errorEmbedLoader {
    // cooldown Embed Error
    static cooldown(author, command, isInt, whInt) {
        const time = command.cooldown
        let date = ""
        if (isInt) date = client.cooldb.get(`${author.id}.${command.name}.${whInt}.cooldown`)
        else date = client.cooldb.get(`${author.id}.${command.name}.cooldown`)
        const cdfm = Math.floor(Math.floor(date + time) / 1000)
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(author.tag, author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()
            .setDescription(`Command avaliable again at <t:${cdfm}:F>`)
        return embed;
    }


    // ownerOnly Embed Error
    static ownerOnly(author) {
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(author.tag, author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()
            .setDescription("This command is reserved for the owners of the bot only!")
        return embed;
    }

    // authorOnly Embed Error
    static authorOnly(author) {
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(author.tag, author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()
            .setDescription("You cannot interact with someone's else button / selectmenu(s).")
        return embed;
    }

    // userPermissions Embed Erro
    static userPermissions(author, data) {
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
    static clientPermissions(author, data) {
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
    static anyUserPermissions(author, data) {
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
    static anyClientPermissions(author, data) {
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
    static onlyUsers(author, data) {
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
    static onlyRoles(author, data) {
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
    static onlyChannels(author, data) {
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
    static onlyGuilds(author, data) {
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
} // Class End
module.exports = {
    errorEmbedLoader
}