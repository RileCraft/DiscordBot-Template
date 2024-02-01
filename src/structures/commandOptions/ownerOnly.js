import { EmbedBuilder } from "discord.js";
import { OWNER_IDS } from "../../config.js";

export const ownerOnlyFN = (client, message, command) => {
    if (!command.ownerOnly || typeof command.ownerOnly !== "boolean") return true;

    if (OWNER_IDS.some((userID) => userID == (message.user ?? message.author)?.id)) return true;
    else {
        if (command.returnErrors === false || command.returnOwnerOnlyError === false) return false;
        message.channel.send({
            embeds: [
                new EmbedBuilder()
                .setColor("DarkRed")
                .setTimestamp()
                .setAuthor({
                    name: message.member.user.globalName ?? message.member.user.username,
                    iconURL: message.member.user.displayAvatarURL()
                })
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription("The command you tried to run is __restricted__ for the developers of this bot and thus the command failed to execute.")
            ],
        });
        
        return false;
    };
};