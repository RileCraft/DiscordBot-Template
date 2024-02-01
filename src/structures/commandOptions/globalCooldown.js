import { EmbedBuilder } from "discord.js";
import { appendFileSync, readFileSync } from "fs";
import { join } from "path";
import { rootPath } from "../../../bot.js";

export const globalCooldownFN = async (client, message, command, interactionType) => {
    if (!command.guildCooldown || isNaN(command.guildCooldown)) return true;

    const dbData = `globalCooldown.${interactionType}.${command.name}.${message.member.id}`;
    const currentTime = Date.now();
    let storedTime;

    try {
        storedTime = Number(readFileSync(join(rootPath, "CooldownDB.txt"), { encoding: 'utf8', flag: 'r' }).split("\n").filter((stuff) => stuff === dbData)[0].split(".")[4]);
    }
    catch {
        storedTime = 0;
    };

    if (Math.floor(currentTime - storedTime) >= command.guildCooldown || !storedTime) {
        appendFileSync(join(rootPath, "CooldownDB.txt"), `${dbData}.${currentTime}`);
        return true;
    }
    else {
        if (command.returnErrors === false || command.returnGlobalCooldownError === false) return false;
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
                .setDescription(`You are currently at cooldown. Please try again in <t:${Math.floor(Math.floor(storedTime + command.guildCooldown) / 1000)}:R>.`)
            ],
        });

        return false;
    };
};