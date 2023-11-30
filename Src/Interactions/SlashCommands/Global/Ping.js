import { ApplicationCommandType } from "discord.js";

export const name = "ping";
export const type = ApplicationCommandType.ChatInput;
export const description = "Pong";
export async function run(client, interaction) {
    interaction.reply({
        content: `Ping is ${client.ws.ping}ms.`
    });
}