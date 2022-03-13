const { inspect } = require('util')
module.exports = {
    name : 'eval',
    ownerOnly: true,
    run : async(client, message, args, container) => {
        Object.assign(this, container)
        const row = new container.Discord.MessageActionRow()
        .addComponents(
            new container.Discord.MessageButton()
            .setCustomId('evalbtn')
            .setLabel('Delete Output')
            .setStyle('DANGER'),
            );
            let code = args.join(" ").trim()
            let depth = 0
            const originalCode = code
            if(!code) return message.channel.send("Please specify something to Evaluate")
            try{
                if (originalCode.includes("--str")) code = `${code.replace("--str", "").trim()}.toString()`
                if (originalCode.includes("--send")) code = `message.channel.send(${code.replace("--send", "").trim()})`
                if (originalCode.includes("--async")) code = `(async () => {${code.replace("--async", "").trim()}})()`
                if (originalCode.includes("--depth=")) depth = originalCode.split("--depth=")[1]; code = code.split("--depth=")[0]
                code = code.replace("--silent", "").trim()
                code = await eval(code)
                code = inspect(code, { depth: depth })
                if (String(code).length > 1990) code = "Output is too long"
                if (String(code).includes(container.Config.token)) code = "This message contained client's token."
                if (originalCode.includes("--silent")) return;
                else message.reply({
                    content:`\`\`\`js\n${code}\n\`\`\``,
                    components: [row],
                    allowedMentions: {
                        repliedUser: false
                    }
                })
            } catch (error){
                console.log(error)
                message.channel.send({
                    content:`\`\`\`js\n${error}\n\`\`\``,
                    components: [row]
                })
            }
        }
    }
