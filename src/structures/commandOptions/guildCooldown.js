import { EmbedBuilder } from "discord.js";
import { join } from "path";
import { rootPath } from "../../../bot.js";
import { appendFileSync, readFileSync } from "fs";

export const guildCooldownFN = async (client, message, command, interactionType) => {
    if (!command.guildCooldown || isNaN(command.guildCooldown) || !message.guild) return true;

    const dbData = `guildCooldown.${message.guild.id}.${interactionType}.${command.name}.${message.member.id}`;
    const currentTime = Date.now();
    let storedTime;

    try {
        storedTime = Number(readFileSync(join(rootPath, "CooldownDB.txt"), { encoding: 'utf8', flag: 'r' }).split("\n").filter((stuff) => stuff === dbData)[0].split(".")[5]);
    }
    catch {
        storedTime = 0;
    };

    if (Math.floor(currentTime - storedTime) >= command.guildCooldown || !storedTime) {
        appendFileSync(join(rootPath, "CooldownDB.txt"), `${dbData}.${currentTime}`);
        return true;
    }
    else {
        if (command.returnErrors == false || command.returnGuildCooldownError === false) return false;
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