import { ActionRowBuilder, StringSelectMenuBuilder } from "discord.js";

export const MsgCommand = {
    name: "callselectmenu",
    run: (client, message) => {
        message.channel.send({
            content: "Cookies SelectMenu",
            components: [
                new ActionRowBuilder().addComponents(new StringSelectMenuBuilder()
                  .setCustomId("SelectMenuExample")
                  .setPlaceholder("Free Cookies!")
                  .addOptions([{
                    label: "Click for cookies!",
                    description: "Freeee!",
                    value: "CookieBox"
                }]))
            ]
        });
    }
}; // Calls the SelectMenuExample SelectMenu.