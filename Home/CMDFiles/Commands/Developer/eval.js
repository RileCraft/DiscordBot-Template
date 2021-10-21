module.exports = {
    name: 'eval',
    ownerOnly: true,
    run: async (client, message, args, Discord) => {
        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setCustomId('evalbtn')
                .setLabel('Delete Output')
                .setStyle('DANGER'),
            );
        const evalcommand = args.join(" ")
        const { inspect } = require('util')
        if (!evalcommand) return message.channel.send("Please specify something to Evaluate")
        try {
            const evaled = eval(evalcommand)
            let evalembed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('🎄╎ Evaluated')
                .addField("📬╎ Input", `\`\`\`kt\n${evalcommand}\`\`\``)
                .addField("📡╎ Output", `\`\`\`kt\n${inspect(evaled, { depth: 0})}\`\`\``)
                .addField("❔╎ TypeOf", `\`\`\`${typeof(evaled)}\`\`\``)
            message.channel.send({
                embeds: [evalembed],
                components: [row]
            })
        } catch (error) {
            let embed1 = new Discord.MessageEmbed()
                .setTitle('Evaluation Error!')
                .setColor("RANDOM")
                .addField("❌╎ Error", `${error}`)
            message.channel.send({
                embeds: [embed1],
                components: [row]
            })
        }

    }
}