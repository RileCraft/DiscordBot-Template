import { ApplicationCommandType } from "discord.js";

export const Context = {
    name: "getuser",
    type: ApplicationCommandType.User,
    guilds: ["1186230608851120188"],
    run: (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.targetId);
        if (!member) member = interaction.member;
        
        interaction.reply({
            content: `That is ${member.user.tag}.`
        });
    }
}; // Simple UserContextMenu example
