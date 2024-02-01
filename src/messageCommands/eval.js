import { inspect } from "util";
import { ButtonBuilder, ActionRowBuilder, ButtonStyle } from "discord.js";

export const MsgCommand = {
    name: "eval",
    ownerOnly: true,
    run: async (client, message, args) => {
        const deleteMessageComponent = new ActionRowBuilder().addComponents(new ButtonBuilder()
          .setCustomId("deleteOutput")
          .setLabel("Delete Output")
          .setStyle(ButtonStyle.Danger));

        let code = args.join(" ").trim();
        let depth = 0;
        const originalCode = code;
        
        if (!code) {
            message.channel.send({ content: "Please specify something to Evaluate" });
            return;
        }

        try {
            if (originalCode.includes("--str")) code = `${code.replace("--str", "").trim()}.toString()`;
            if (originalCode.includes("--send")) code = `message.channel.send(${code.replace("--send", "").trim()})`;
            if (originalCode.includes("--async")) code = `(async () => {${code.replace("--async", "").trim()}})()`;
            if (originalCode.includes("--depth=")) depth = Number(originalCode.split("--depth=")[1]);

            code = code.split("--depth=")[0];
            code = code.replace("--silent", "").trim();
            code = await eval(code);
            code = inspect(code, { depth: depth });

            if (String(code).length > 1990) code = "Output is too long";
            if (String(code).includes((client?.token ?? ""))) code = "This message contained client's token.";
            if (originalCode.includes("--silent")) return;
            else message.reply({
                content: `\`\`\`js\n${code}\n\`\`\``,
                components: [deleteMessageComponent],
                allowedMentions: {
                    repliedUser: false
                }
            });
        }
        catch (error) {
            console.log(error);
            message.channel.send({
                content: `\`\`\`js\n${error}\n\`\`\``,
                components: [deleteMessageComponent]
            });
        }
    }
}; // Eval code using message command.