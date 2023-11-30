import { ApplicationCommandType } from "discord.js";

export const name = "getuser";
export const type = ApplicationCommandType.User;
export async function run(client, interaction) {
    const member = interaction.guild.members.cache.get(interaction.targetId);
    interaction.reply({
        content: `That is ${member.user.tag}.`
    });
}