import { ActionRowBuilder, StringSelectMenuBuilder } from "discord.js";

export const name = "callmenu";
export async function run(client, message, args) {
    const ActionRow = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
        .setCustomId("SelectMenuExample")
        .setPlaceholder("Free Cookies!")
        .addOptions(
            [{
                label: "Click for cookies!",
                description: "Freeee!",
                value: "CookieBox"
            }]
        )
    );
    message.channel.send({
        content: "Cookies SelectMenu",
        components: [ActionRow]
    });
}