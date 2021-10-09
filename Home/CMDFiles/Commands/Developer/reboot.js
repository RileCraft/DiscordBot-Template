module.exports = {
    name: 'reboot',
    ownerOnly: true,
    run: async (client, message, args, MessageEmbed) => {

        message.channel.send({
            content: "Restarting . . ."
        }).then(() => {
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