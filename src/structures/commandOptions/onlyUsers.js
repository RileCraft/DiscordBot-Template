import { EmbedBuilder } from "discord.js";

export const onlyUsersFN = (client, message, command) => {
    if (!command.onlyUsers || !Array.isArray(command.onlyUsers)) return true;
    
    if (command.onlyUsers.some((userID) => (message.user ?? message.author)?.id == userID)) return true;
    else {
        if (command.returnErrors === false || command.returnOnlyUsersError === false) return false;
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
                .setDescription("The command you tried to execute couldn't be ran as you are not one of the authorized users.")
            ]
        });
        
        return false;
    };
};