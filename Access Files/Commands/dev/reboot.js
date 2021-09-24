const { MessageEmbed } =require('discord.js')
module.exports = {
    name : 'reboot',
    usage: "nom reboot",
    ownerOnly: true,
description: "Restarts the bot.",
    run : async(client, message, args) => {
        
        	message.channel.send("Restarting . . .").then(() => { 
process.on("exit", () => {
    require("child_process").spawn(process.argv.shift(), process.argv, {
        cwd: process.cwd(),
        detached: true,
        stdio: "inherit",
    });
});
process.exit();
})
        
      
    }
}