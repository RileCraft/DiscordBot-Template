const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");
module.exports = {
    name: "callmenu",
    run: async (client, message, args) => {
        const ActionRow = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
            .setCustomId("SelectMenuExample")
            .setPlaceholder("Free Cookies!")
            .addOptions(
                [
                    {
                        label: "Click for cookies!",
                        description: "Freeee!",
                        value: "CookieBox"
                    }
                ]
            )
        );
        message.channel.send({
            content: "Cookies SelectMenu",
            components: [ActionRow]
        });
    }
};