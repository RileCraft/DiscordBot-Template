const fs = require("fs");
const FileScanner = require('node-recursive-directory');

module.exports = async (DiscordClient, RootPath) => {
    const ScannedFiles = await FileScanner(`${RootPath}/Src/Events`)
        ScannedFiles.forEach(File => {
            if (fs.statSync(File).isDirectory()) return;
            const Event = require(File);
            if (Event.ignore) return;
            DiscordClient.events.set(Event.name, Event)

            if (Event.isCustom) Event.run(DiscordClient, RootPath);
            else {
                if (Event.runOnce) DiscordClient.once(Event.name, (...args) => Event.run(...args, DiscordClient, RootPath));
                else DiscordClient.on(Event.name, (...args) => Event.run(...args, DiscordClient, RootPath));
            }
        });
}